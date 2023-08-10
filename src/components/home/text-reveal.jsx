import React from "react"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"

// look into individual letter reveal https://codepen.io/bekahmcdonald/pen/vYBXMOZ

export default function TextReveal({ currentWord }) {
  return (
    <>
      <div className="w-full relative h-16 overflow-hidden">
        <AnimatePresence>
          <motion.h1
            key={currentWord}
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            exit={{ y: 60 }}
            transition={{ duration: 0.4 }}
            className="absolute text-blue-500 whitespace-nowrap"
          >
            {currentWord}
          </motion.h1>
        </AnimatePresence>
      </div>
    </>
  )
}
