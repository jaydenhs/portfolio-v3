import React from "react"
import { stats, steps, frameUrl } from "./pca-data"
import { usePcaIndex } from "./pca-store"
import { PcaSlider } from "./pca-widget"

const MAX_N = stats.frames[stats.frames.length - 1].n
const logPos = n => Math.log(n) / Math.log(MAX_N) // 1 -> 0, MAX_N -> 1

export default function PcaExplainer() {
  const [index, setIndex] = usePcaIndex()
  const step = steps[index]
  const isOriginal = step.n === null

  return (
    <div className="wide space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Card
          title="Two thin factors replace the pixel grid"
          caption={
            isOriginal
              ? "Every pixel is stored: H × W values per channel."
              : `Storing H × ${step.n} scores and ${step.n} × W components takes ${step.storage}% of the values in the original grid.`
          }
        >
          <FactorDiagram step={step} />
        </Card>
        <Card
          title="The first components carry most of the structure"
          caption={
            isOriginal
              ? "All components together account for 100% of the variance."
              : `${step.n} components account for ${step.variance.toFixed(
                  1
                )}% of the image's variance.`
          }
        >
          <VarianceCurve step={step} />
        </Card>
      </div>

      <div className="space-y-1 rounded-xl bg-gray-50 p-4 lg:px-6">
        <div className="flex items-baseline justify-between">
          <label
            htmlFor="pca-explainer-slider"
            className="font-bold text-black"
          >
            Components kept
          </label>
          <span className="tabular-nums text-gray-500">
            {isOriginal ? "All" : step.n}
          </span>
        </div>
        <PcaSlider
          id="pca-explainer-slider"
          index={index}
          onChange={setIndex}
        />
      </div>
    </div>
  )
}

const Card = ({ title, caption, children }) => (
  <figure className="space-y-3 rounded-xl bg-gray-50 p-4 lg:p-5">
    <figcaption className="font-bold text-black">{title}</figcaption>
    {children}
    <p className="text-sm text-gray-500">{caption}</p>
  </figure>
)

// pixels ≈ scores × components, with the shared (thin) dimension drawn at a size that follows n
function FactorDiagram({ step }) {
  const W = 132
  const H = 110
  const top = 16
  const isOriginal = step.n === null
  const n = isOriginal ? MAX_N : step.n
  const thin = 6 + 50 * logPos(n)
  const lines = Math.min(n, 24)

  const scoresX = 178
  const compsX = scoresX + thin + 34
  const fill = { fill: "var(--primary)" }

  return (
    <svg
      viewBox="0 0 440 190"
      role="img"
      aria-label="A grid of pixels shown as the product of two thin matrices"
      className="block w-full"
    >
      <defs>
        <clipPath id="pca-pixels-clip">
          <rect x={0} y={top} width={W} height={H} rx={6} />
        </clipPath>
      </defs>
      {/* the (re)built image */}
      <image
        href={frameUrl(step)}
        x={0}
        y={top}
        width={W}
        height={H}
        preserveAspectRatio="none"
        clipPath="url(#pca-pixels-clip)"
      />
      <text
        x={W / 2}
        y={top + H + 22}
        textAnchor="middle"
        className="fill-gray-500 text-[13px]"
      >
        pixels · H × W
      </text>

      <text
        x={W + 24}
        y={top + H / 2 + 8}
        textAnchor="middle"
        className="fill-gray-500 text-[26px]"
      >
        ≈
      </text>

      {/* scores: H × n */}
      <rect
        x={scoresX}
        y={top}
        width={thin}
        height={H}
        rx={4}
        style={fill}
        opacity={0.85}
      />
      {Array.from({ length: lines - 1 }, (_, i) => (
        <line
          key={i}
          x1={scoresX + ((i + 1) * thin) / lines}
          x2={scoresX + ((i + 1) * thin) / lines}
          y1={top}
          y2={top + H}
          stroke="white"
          strokeOpacity={0.55}
        />
      ))}
      <text
        x={scoresX + thin / 2}
        y={top + H + 22}
        textAnchor="middle"
        className="fill-gray-500 text-[13px]"
      >
        scores · H × {isOriginal ? "n" : step.n}
      </text>

      <text
        x={scoresX + thin + 17}
        y={top + H / 2 + 8}
        textAnchor="middle"
        className="fill-gray-500 text-[22px]"
      >
        ×
      </text>

      {/* components: n × W */}
      <rect
        x={compsX}
        y={top}
        width={W}
        height={thin}
        rx={4}
        style={fill}
        opacity={0.5}
      />
      {Array.from({ length: lines - 1 }, (_, i) => (
        <line
          key={i}
          y1={top + ((i + 1) * thin) / lines}
          y2={top + ((i + 1) * thin) / lines}
          x1={compsX}
          x2={compsX + W}
          stroke="white"
          strokeOpacity={0.55}
        />
      ))}
      <text
        x={compsX + W / 2}
        y={top + thin + 20}
        textAnchor="middle"
        className="fill-gray-500 text-[13px]"
      >
        components · {isOriginal ? "n" : step.n} × W
      </text>
    </svg>
  )
}

// Cumulative variance against number of components (log scale), with a marker that follows the slider
function VarianceCurve({ step }) {
  const x0 = 58
  const x1 = 424
  const y0 = 14
  const y1 = 170
  const px = n => x0 + logPos(n) * (x1 - x0)
  const py = v => y1 - (v / 100) * (y1 - y0)

  const pts = stats.frames.map(f => [px(f.n), py(f.variance)])
  const line = pts
    .map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ")
  const area = `${line} L${x1} ${y1} L${pts[0][0]} ${y1} Z`

  const isOriginal = step.n === null
  const mx = px(isOriginal ? MAX_N : step.n)
  const my = py(step.variance)
  const labelRight = mx < x1 - 90

  return (
    <svg
      viewBox="0 0 440 212"
      role="img"
      aria-label="Variance kept as the number of components grows"
      className="block w-full"
    >
      {[0, 50, 100].map(v => (
        <g key={v}>
          <line
            x1={x0}
            x2={x1}
            y1={py(v)}
            y2={py(v)}
            stroke="currentColor"
            className="text-gray-200"
          />
          <text
            x={x0 - 8}
            y={py(v) + 4}
            textAnchor="end"
            className="fill-gray-500 text-[12px]"
          >
            {v}%
          </text>
        </g>
      ))}
      <text
        transform={`rotate(-90 12 ${(y0 + y1) / 2})`}
        x={12}
        y={(y0 + y1) / 2}
        textAnchor="middle"
        className="fill-gray-500 text-[12px]"
      >
        variance kept
      </text>
      {[1, 10, 100, MAX_N].map(n => (
        <text
          key={n}
          x={px(n)}
          y={y1 + 18}
          textAnchor="middle"
          className="fill-gray-500 text-[12px]"
        >
          {n}
        </text>
      ))}
      <text
        x={(x0 + x1) / 2}
        y={y1 + 38}
        textAnchor="middle"
        className="fill-gray-500 text-[12px]"
      >
        components kept (log scale)
      </text>

      <path d={area} style={{ fill: "var(--primary)" }} opacity={0.14} />
      <path
        d={line}
        fill="none"
        strokeWidth={2.5}
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{ stroke: "var(--primary)" }}
      />

      <line
        x1={mx}
        x2={mx}
        y1={my}
        y2={y1}
        strokeDasharray="3 3"
        stroke="currentColor"
        className="text-gray-400"
      />
      <circle
        cx={mx}
        cy={my}
        r={6}
        fill="white"
        strokeWidth={3}
        style={{ stroke: "var(--primary)" }}
      />
      <text
        x={labelRight ? mx + 12 : mx - 12}
        y={my + 22}
        textAnchor={labelRight ? "start" : "end"}
        className="fill-gray-900 text-[13px] font-bold"
      >
        {isOriginal ? "all" : `n = ${step.n}`} ·{" "}
        {step.variance.toFixed(isOriginal ? 0 : 1)}%
      </text>
    </svg>
  )
}
