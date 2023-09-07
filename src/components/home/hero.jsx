import React, { useState, useEffect } from "react"

import { motion } from "framer-motion"
import { fadeIn } from "../../styles/animations"

import TextReveal from "./text-reveal"
import ModelCanvas from "./model-canvas"

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
    <div className="reading-grid mb-24 lg:mb-16">
      <motion.div
        className="wide w-full h-screen-3/4 flex flex-col-reverse lg:flex-row lg:items-center mx-auto"
        style={{ maxWidth: "1440px" }}
        {...fadeIn}
      >
        <div className="flex-1 space-y-0 md:space-y-4">
          <div className="w-full mt-8 lg:mt-0 space-y-0 md:space-y-3">
            <h1 className="wide whitespace-nowrap">Hi! I'm Jayden, a</h1>
            <TextReveal currentWord={words[activeWordIndex].text} />
          </div>
          <div className="space-y-2">
            <p className="lg:text-lg">
              I strive to bridge the gap between empathetic design and
              innovative software.
            </p>
            <p className="lg:text-lg">
              Currently in my final year of Systems Design Engineering at the
              University of Waterloo.
            </p>
          </div>
        </div>
        <ModelCanvas
          className={"flex-1 w-full h-1/2 lg:h-full "}
          // style={{ height: "max(50vh, 40rem)" }}
          currentScene={words[activeWordIndex].animation}
        />
      </motion.div>
    </div>
  )
}
