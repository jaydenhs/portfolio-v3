import React, { Suspense, useState } from "react"

import { Canvas } from "react-three-fiber"
import { useProgress, OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion"

import Model from "./model"

export default function ModelCanvas({ currentScene, className }) {
  const [isLoaded, setIsLoaded] = useState(true)

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    if (active) {
      setIsLoaded(false)
    } else {
      setIsLoaded(true)
    }
    return null
  }

  return (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      style={{ height: "max(50vh, 40rem)" }}
    >
      <Canvas
        camera={{
          position: [6, 0.5, 6],
          zoom: 2,
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight color="white" position={[0, 1, 1]} intensity={0.8} />
        <Suspense fallback={<Loader />}>
          <Model isLoaded={isLoaded} currentScene={currentScene} />
        </Suspense>
      </Canvas>
    </motion.div>
  )
}
