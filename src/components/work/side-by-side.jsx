import React from "react"
import Video from "../video"

export default function SideBySide({ media, mediaOnRight, children }) {
  const className = mediaOnRight ? "md:order-last" : ""

  return (
    <div className="full-bleed grid md:grid-cols-2 pb-4 md:pb-0 gap-6">
      <Video className={className} path={media} />
      <div className="reading mx-auto my-auto space-y-2">{children}</div>
    </div>
  )
}
