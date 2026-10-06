import stats from "./pca/stats.json"

const frames = require.context("./pca/frames", false, /\.webp$/)
const load = name => {
  const m = frames(`./${name}.webp`)
  return m.default || m
}
const pad = n => String(n).padStart(3, "0")

export { stats }
export const frameUrl = step =>
  load(step.n === null ? "original" : `n-${pad(step.n)}`)
// The original has no error, so it has no frame: callers draw the lowest colour of the error map instead
export const errorUrl = step =>
  step.n === null ? null : load(`err-${pad(step.n)}`)
export const ZERO_ERROR_COLOR = "rgb(0, 0, 4)"

// One stop per component count, plus the untouched original at the end
export const steps = [
  ...stats.frames,
  { n: null, psnr: null, variance: 100, storage: 100 },
]
export const DEFAULT_INDEX = 8
