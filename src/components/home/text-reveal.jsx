import React from "react"
import TextLoop from "react-text-loop"

import { styled } from "styled-components"
import tw from "twin.macro"
import { motion } from "framer-motion"

const words = [
  "product designer",
  "front-end developer",
  "concert pianist",
  "world traveller",
]

// look into individual letter reveal https://codepen.io/bekahmcdonald/pen/vYBXMOZ

export default function TextReveal() {
  return (
    <>
      <div className="relative h-16 overflow-hidden">
        {words.map((word, index) => (
          <motion.h1
            key={index}
            animate={{
              y: [
                "-60px",
                "0px",
                "0px",
                "0px",
                "0px",
                "0px",
                "0px",
                "0px",
                "0px",
                "0px",
                "0px",
                "0px",
                "0px",
                "0px",
                "0px",
                "60px",
              ],
            }}
            transition={{
              duration: 4,
              delay: index * 4,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: (words.length - 1) * 4,
            }}
            className="absolute text-blue-500"
          >
            {word}
          </motion.h1>
        ))}
      </div>
    </>
  )
}
