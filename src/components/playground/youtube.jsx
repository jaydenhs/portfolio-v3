import React from "react"

export default function YouTube({
  id,
  title = "YouTube video",
  className = "",
}) {
  return (
    <iframe
      className={`w-full aspect-video rounded-xl ${className}`}
      src={`https://www.youtube-nocookie.com/embed/${id}`}
      title={title}
      loading="lazy"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowFullScreen
    />
  )
}
