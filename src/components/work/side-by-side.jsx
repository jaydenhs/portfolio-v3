import React from "react"
import Image from "../image"

export default function SideBySide({
  src,
  className,
  mediaOnRight,
  children,
  maxWidth,
}) {
  const rightClassName = mediaOnRight ? "md:order-last" : ""

  return (
    <div
      className="wide grid md:grid-cols-2 pb-4 md:pb-0 gap-6 mx-auto"
      style={{ maxWidth: `${maxWidth}px` }}
    >
      <Image className={`w-full ${rightClassName}`} src={src} />
      <div className="reading mx-auto my-auto space-y-2">{children}</div>
    </div>
  )
}
