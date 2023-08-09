import React, { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import TextLoop from "react-text-loop"

import { styled } from "styled-components"
import tw from "twin.macro"
import { motion } from "framer-motion"

// look into individual letter reveal https://codepen.io/bekahmcdonald/pen/vYBXMOZ

export default function TextReveal({ currentWord }) {
  return (
    <>
      <div className="relative h-16 overflow-hidden">
        <AnimatePresence>
          <motion.h1
            key={currentWord}
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            exit={{ y: 60 }}
            transition={{ duration: 0.4 }}
            className="absolute text-blue-500"
          >
            {currentWord}
          </motion.h1>
        </AnimatePresence>
      </div>
    </>
  )
}
