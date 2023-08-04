import React, { Suspense, useState, useEffect } from "react"
import { motion } from "framer-motion"

import { fadeIn } from "../../styles/animations"

import { Canvas } from "react-three-fiber"
import JaydenModel from "./jayden-model"
import TextReveal from "./text-reveal"

import { OrbitControls, Loader } from "@react-three/drei"

const words = [
  "product designer",
  "front-end developer",
  "world traveller",
  "concert pianist",
]

export default function Hero() {
  const [activeWordIndex, setActiveWordIndex] = useState(0)

  // Function to increment the count
  const incrementCount = () => {
    if (activeWordIndex == words.length - 1) {
      setActiveWordIndex(0)
    } else {
      setActiveWordIndex(activeWordIndex + 1)
    }
  }

  // Effect to trigger the increment every second
  useEffect(() => {
    const intervalId = setInterval(incrementCount, 4000)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [activeWordIndex]) // Only re-run the effect if the count changes

  return (
    <div className="reading-grid" style={{ height: "max(50vh, 40rem)" }}>
      <div className="wide h-full flex items-center">
        <motion.div {...fadeIn} className="w-1/2">
          <h1 className="wide">Hi! I'm Jayden, a</h1>
          <TextReveal />
        </motion.div>
        <Canvas
          camera={{
            position: [6, 0.5, 6],
            zoom: 2,
          }}
          className="w-1/2 flex-1"
        >
          <OrbitControls />
          <ambientLight intensity={1.1} />
          <directionalLight color="white" position={[0, 1, 1]} intensity={1} />
          <Suspense fallback={null}>
            <JaydenModel />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}
