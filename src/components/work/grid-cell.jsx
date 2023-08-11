import React from "react"
import Image from "../image"

export default function GridCell({
  cols = 12,
  isTitle = false,
  srcArray,
  children,
}) {
  let extraDivClass = isTitle
    ? "items-center"
    : "flex-col justify-between p-8 pb-0"

  return (
    <div
      className={`col-span-1 md:col-span-${cols} flex bg-gray-200 rounded-3xl ${extraDivClass}`}
    >
      <div
        style={{ color: `${isTitle ? "var(--primaryD)" : ""}` }}
        className={isTitle ? "p-8 w-1/2" : "pb-8"}
      >
        {children}
      </div>
      {isTitle ? (
        <Image className="w-1/2 self-end pt-8 pr-8" src={srcArray[0]} />
      ) : (
        <div className="flex space-x-6 mx-auto">
          {srcArray.map(src => {
            return <Image src={src} />
          })}
        </div>
      )}
    </div>
  )
}
