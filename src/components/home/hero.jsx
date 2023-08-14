import React, { useState, useEffect } from "react"

import { motion } from "framer-motion"
import { fadeIn } from "../../styles/animations"

import TextReveal from "./text-reveal"
import ModelCanvas from "./model-canvas"
import AutoLink from "../auto-link"

const words = [
  { text: "product designer", animation: "thinking" },
  { text: "front-end developer", animation: "typing" },
  { text: "world traveller", animation: "walking" },
  { text: "concert pianist", animation: "playing piano" },
]

export default function Hero() {
  const [activeWordIndex, setActiveWordIndex] = useState(0)

  const incrementCount = () => {
    if (activeWordIndex == words.length - 1) {
      setActiveWordIndex(0)
    } else {
      setActiveWordIndex(activeWordIndex + 1)
    }
  }

  useEffect(() => {
    const intervalId = setInterval(incrementCount, 4000)
    return () => clearInterval(intervalId)
  }, [activeWordIndex])

  return (
    <div className="reading-grid mb-4" style={{ height: "max(50vh, 40rem)" }}>
      <motion.div
        className="wide w-full h-full flex items-center mx-auto"
        style={{ maxWidth: "1440px" }}
        {...fadeIn}
      >
        <div className="w-1/2 space-y-4">
          <div>
            <h1 className="wide whitespace-nowrap">Hi! I'm Jayden, a</h1>
            <TextReveal currentWord={words[activeWordIndex].text} />
          </div>
          <div className="space-y-2">
            <p className="text-lg">
              I strive to bridge the gap between empathetic design and
              innovative software.
            </p>
            <p className="text-lg">
              Currently in my final year of Systems Design Engineering at the
              University of Waterloo.
            </p>
          </div>
        </div>
        <ModelCanvas
          className={"w-1/2"}
          currentScene={words[activeWordIndex].animation}
        />
      </motion.div>
    </div>
  )
}
