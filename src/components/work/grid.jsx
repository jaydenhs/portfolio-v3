import React from "react"

export default function Grid({ children }) {
  return (
    <div className="wide grid grid-cols-1 md:grid-cols-12 gap-8 text-black pt-8">
      {/* prevent Tailwind from tree-shaking dynamically generated classes in grid-cell.jsx */}
      <div className="hidden md:col-span-4 md:col-span-8 md:col-span-12" />
      {children}
    </div>
  )
}
