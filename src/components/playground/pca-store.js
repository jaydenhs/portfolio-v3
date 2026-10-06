import { useSyncExternalStore } from "react"
import { DEFAULT_INDEX } from "./pca-data"

// Tiny shared store so the widget and the explainer visuals follow the same slider position
let index = DEFAULT_INDEX
const listeners = new Set()

const subscribe = listener => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}
const setIndex = next => {
  index = next
  listeners.forEach(listener => listener())
}

export const usePcaIndex = () => [
  useSyncExternalStore(
    subscribe,
    () => index,
    () => DEFAULT_INDEX
  ),
  setIndex,
]
