import React, { useEffect, useRef, useState } from "react"
import { stats, steps, frameUrl, errorUrl, ZERO_ERROR_COLOR } from "./pca-data"
import { usePcaIndex } from "./pca-store"

const ZOOM = 4
// Image width at lg+: the widget (image + zoom column + controls) stays within the viewport height,
// and 1.5x the image width (image + half-width zoom column) stays within the page width
const IMAGE_WIDTH = `min(calc((100vh - 15rem) * ${
  stats.width / stats.height
}), calc((100vw - 10.4rem) / 1.5))`
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

// Matches the colour map used to render the error frames
export const ERROR_GRADIENT =
  "linear-gradient(to right, rgb(0,0,4), rgb(87,16,110), rgb(188,55,84), rgb(249,142,9), rgb(252,255,164))"

export default function PcaWidget() {
  const [index, setIndex] = usePcaIndex()
  const [focus, setFocus] = useState({ x: 0.5, y: 0.6 })
  const [showError, setShowError] = useState(false)
  const dragging = useRef(false)

  // Warm the cache so dragging the slider swaps frames instantly
  useEffect(() => {
    steps.forEach(s => {
      new window.Image().src = frameUrl(s)
      if (errorUrl(s)) new window.Image().src = errorUrl(s)
    })
  }, [])

  const step = steps[index]
  const isOriginal = step.n === null
  const errorOn = showError
  // The original has no error frame: it is drawn as the lowest colour of the error map
  const current = errorOn ? errorUrl(step) : frameUrl(step)
  const original = frameUrl(steps[steps.length - 1])
  const label = isOriginal ? "Original" : `n = ${step.n}`
  const viewLabel = errorOn
    ? isOriginal
      ? "No error"
      : `Error · ${label}`
    : label

  // Keep the zoom window fully inside the image
  const half = 1 / ZOOM / 2
  const fx = clamp(focus.x, half, 1 - half)
  const fy = clamp(focus.y, half, 1 - half)

  const moveFocus = e => {
    const r = e.currentTarget.getBoundingClientRect()
    setFocus({
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height,
    })
  }

  return (
    <div
      className="wide space-y-4 lg:w-[calc(var(--imgw)*1.5+0.4rem)] lg:justify-self-center"
      style={{ "--imgw": IMAGE_WIDTH }}
    >
      <div className="grid gap-4 lg:flex">
        <div
          className="relative w-full cursor-crosshair select-none overflow-hidden rounded-xl bg-gray-100 lg:w-[var(--imgw)] lg:shrink-0"
          style={{
            aspectRatio: `${stats.width} / ${stats.height}`,
            touchAction: "pan-y",
          }}
          onPointerDown={e => {
            if (e.target.closest("button")) return
            dragging.current = true
            e.currentTarget.setPointerCapture(e.pointerId)
            moveFocus(e)
          }}
          onPointerMove={e => {
            if (e.pointerType === "mouse" || dragging.current) moveFocus(e)
          }}
          onPointerUp={() => (dragging.current = false)}
          onPointerCancel={() => (dragging.current = false)}
        >
          {current ? (
            <img
              src={current}
              alt={
                errorOn
                  ? `Where the ${step.n}-component reconstruction differs from the original`
                  : isOriginal
                  ? "The original image"
                  : `The image reconstructed from ${step.n} principal components`
              }
              draggable={false}
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <div
              role="img"
              aria-label="No error: the original is unchanged"
              className="absolute inset-0"
              style={{ background: ZERO_ERROR_COLOR }}
            />
          )}
          <div
            className="pointer-events-none absolute rounded-sm border-2 border-white shadow-[0_0_0_1px_rgba(0,0,0,0.35)]"
            style={{
              left: `${(fx - half) * 100}%`,
              top: `${(fy - half) * 100}%`,
              width: `${100 / ZOOM}%`,
              height: `${100 / ZOOM}%`,
            }}
          />
          <Tag>{viewLabel}</Tag>

          <div
            role="group"
            aria-label="View"
            className="absolute right-3 top-3 flex rounded-full bg-white/90 p-1 shadow-sm backdrop-blur-md"
          >
            <ViewOption active={!errorOn} onClick={() => setShowError(false)}>
              Image
            </ViewOption>
            <ViewOption active={errorOn} onClick={() => setShowError(true)}>
              Error map
            </ViewOption>
          </div>

          {errorOn && (
            <div className="pointer-events-none absolute bottom-3 right-3 w-40 space-y-1.5 rounded-xl bg-white/95 p-2.5 text-gray-900 shadow-sm backdrop-blur-md">
              <div
                className="h-2.5 rounded-full"
                style={{ background: ERROR_GRADIENT }}
              />
              <div className="flex justify-between text-sm font-bold">
                <span>Low</span>
                <span>High error</span>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 lg:min-w-0 lg:flex-1 lg:grid-cols-1">
          <ZoomPane label={viewLabel} src={current} fx={fx} fy={fy} />
          <ZoomPane label="Original" src={original} fx={fx} fy={fy} />
        </div>
      </div>

      <div className="space-y-4 rounded-xl bg-gray-50 p-4 lg:flex lg:items-center lg:gap-10 lg:space-y-0 lg:px-6">
        <div className="space-y-1 lg:min-w-0 lg:flex-1">
          <div className="flex items-baseline justify-between">
            <label htmlFor="pca-slider" className="font-bold text-black">
              Components kept
            </label>
            <span className="tabular-nums text-gray-500">
              {isOriginal ? "All" : step.n}
            </span>
          </div>
          <PcaSlider id="pca-slider" index={index} onChange={setIndex} />
          <div className="flex justify-between text-sm text-gray-500">
            <span>Most compressed</span>
            <span>Original</span>
          </div>
        </div>

        <dl className="grid grid-cols-3 gap-x-6 lg:flex lg:shrink-0 lg:gap-x-8">
          <Stat
            label="PSNR"
            value={isOriginal ? "∞" : step.psnr.toFixed(1)}
            unit={isOriginal ? "" : "dB"}
          />
          <Stat
            label="Variance kept"
            value={step.variance.toFixed(isOriginal ? 0 : 1)}
            unit="%"
          />
          <Stat
            label="Storage"
            value={
              isOriginal
                ? "100"
                : step.storage.toFixed(step.storage < 10 ? 1 : 0)
            }
            unit="%"
          />
        </dl>
      </div>

      <p className="text-sm text-gray-500">
        Artwork by{" "}
        <a
          href="https://www.pixiv.net/en/users/82475503"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 underline underline-offset-2 transition-colors duration-300 hover:text-black"
        >
          NariJade
        </a>
      </p>
    </div>
  )
}

export const PcaSlider = ({ id, index, onChange }) => (
  <input
    id={id}
    type="range"
    min={0}
    max={steps.length - 1}
    step={1}
    value={index}
    onChange={e => onChange(Number(e.target.value))}
    className="block w-full cursor-pointer"
    style={{ accentColor: "var(--primary)" }}
  />
)

const ViewOption = ({ active, onClick, children }) => (
  <button
    type="button"
    aria-pressed={active}
    onClick={onClick}
    className={`rounded-full px-3 py-1 text-sm font-bold transition-colors duration-300 ${
      active ? "bg-gray-900 text-white" : "text-gray-900 hover:bg-gray-100"
    }`}
  >
    {children}
  </button>
)

const Tag = ({ children }) => (
  <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-sm font-bold text-gray-900 backdrop-blur-md">
    {children}
  </span>
)

// Fixed width at lg+ so the slider beside the stats never changes size as the values change
const Stat = ({ label, value, unit }) => (
  <div className="lg:w-28">
    <dt className="text-sm text-gray-500">{label}</dt>
    <dd className="text-2xl font-bold tabular-nums text-black">
      {value}
      {unit && <span className="ml-1 text-base text-gray-500">{unit}</span>}
    </dd>
  </div>
)

// Shows the ZOOM× crop of `src` centred on the focus point, using the same aspect ratio as the image.
// A null `src` is the zero-error view of the original: the lowest colour of the error map.
const ZoomPane = ({ label, src, fx, fy }) => {
  const x0 = fx - 1 / ZOOM / 2
  const y0 = fy - 1 / ZOOM / 2
  const k = (ZOOM / (ZOOM - 1)) * 100
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-gray-100"
      style={{
        aspectRatio: `${stats.width} / ${stats.height}`,
        ...(src
          ? {
              backgroundImage: `url(${src})`,
              backgroundSize: `${ZOOM * 100}% ${ZOOM * 100}%`,
              backgroundPosition: `${x0 * k}% ${y0 * k}%`,
              backgroundRepeat: "no-repeat",
            }
          : { background: ZERO_ERROR_COLOR }),
      }}
    >
      <Tag>
        {label} · {ZOOM}×
      </Tag>
    </div>
  )
}
