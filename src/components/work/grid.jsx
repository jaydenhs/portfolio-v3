import React from "react"

export default function Grid({ children }) {
  return (
    <div className="wide grid grid-cols-1 lg:grid-cols-12 gap-8 text-black pt-8">
      {/* prevent Tailwind from tree-shaking dynamically generated classes in grid-cell.jsx */}
      <div className="hidden lg:col-span-4 lg:col-span-8 lg:col-span-12" />
      {children}
    </div>
  )
}
