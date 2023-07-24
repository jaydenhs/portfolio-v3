import React from "react"
import Image from "../image"

export default function GridCellDesktop({
  cols = 12,
  isTitle = false,
  srcArray,
  children,
  pt = 8,
  pb = 0,
}) {
  return (
    <div
      className={`col-span-1 md:col-span-${cols} flex items-center bg-gray-100 rounded-3xl flex-col justify-between px-8 pt-${pt} pb-${pb}`}
    >
      <div
        style={{ color: `${isTitle ? "var(--primaryD)" : ""}` }}
        className={`pb-8 w-full space-y-2 ${
          isTitle ? "text-center" : "text-left"
        }`}
      >
        {children}
      </div>
      <div className="flex space-x-6 mx-auto">
        {srcArray.map(src => {
          return <Image src={src} />
        })}
      </div>
    </div>
  )
}
