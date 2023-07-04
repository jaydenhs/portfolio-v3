import React, { useState, useRef } from "react"
import { motion } from "framer-motion"

import { styled } from "styled-components"
import tw from "twin.macro"

function Video({ src, children, className, caption }) {
  const webm = require(`../work/${src}`)

  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const handlePlayPause = () => {
    const video = videoRef.current

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <figure className={`flex flex-col w-full ${className}`}>
      <div className="w-full space-y-2">{children}</div>
      <div className="h-6" />
      <div className="relative">
        <motion.video
          loop
          muted
          className="w-full rounded-xl"
          autoPlay
          ref={videoRef}
        >
          <source src={webm.default} type="video/webm" />
        </motion.video>
        <VideoControl onClick={handlePlayPause}>
          {isPlaying ? PauseIcon : PlayIcon}
        </VideoControl>
      </div>
      <div className="h-4" />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

const VideoControl = styled.button`
  ${tw`absolute bottom-4 right-4 bg-black bg-opacity-50 p-2 rounded-md text-white cursor-pointer`}
  svg {
    fill: currentColor;
  }
`

const PauseIcon = (
  <svg
    fill="#000000"
    width="32px"
    height="32px"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>pause</title>
    <path d="M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.44 0.576t-0.576 1.44v16.16zM18.016 24.096q0 0.832 0.608 1.408t1.408 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.408 0.576t-0.608 1.44v16.16z"></path>
  </svg>
)

const PlayIcon = (
  <svg
    fill="#000000"
    width="32px"
    height="32px"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>play</title>
    <path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"></path>
  </svg>
)

export default React.memo(Video)
