import React from "react"
import Image from "../image"

export default function GridCell({
  cols = 12,
  isTitle = false,
  srcArray,
  children,
}) {
  let extraDivClass = isTitle
    ? "items-center md:flex-row"
    : "justify-between p-8 pb-0"

  return (
    <div
      className={`col-span-1 lg:col-span-${cols} flex flex-col bg-gray-100 rounded-3xl ${extraDivClass}`}
    >
      <div
        style={{ color: `${isTitle ? "var(--primaryD)" : ""}` }}
        className={isTitle ? "p-8 md:w-1/2" : "pb-8"}
      >
        {children}
      </div>
      {isTitle ? (
        <Image
          className="md:w-1/2 self-end md:pt-8 md:pr-8"
          src={srcArray[0]}
        />
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
