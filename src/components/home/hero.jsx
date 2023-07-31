import React, { Suspense } from "react"
import { motion } from "framer-motion"

import { fadeIn } from "../../styles/animations"

import { Canvas } from "react-three-fiber"
import { Model } from "./model"
import TextReveal from "./text-reveal"

import { OrbitControls } from "@react-three/drei"

export default function Hero() {
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
          <directionalLight
            color="white"
            position={[0, 1, 1]}
            intensity={0.5}
          />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}
