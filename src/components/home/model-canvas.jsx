import React, { Suspense, useState } from "react"

import { Canvas } from "react-three-fiber"
import { useProgress, OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion"

import Model from "./model"

export default function ModelCanvas({
  currentScene,
  position = [6, 0.5, 6],
  className,
  ...rest
}) {
  const [isLoaded, setIsLoaded] = useState(true)

  function Loader() {
    const { active } = useProgress()
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
      {...rest}
    >
      <Canvas
        className="w-full h-full"
        camera={{
          position: position,
          zoom: 2.5,
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
