import React from "react"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"

export default function TextReveal({ currentWord }) {
  return (
    <>
      <div className="w-full relative h-16 overflow-hidden">
        <AnimatePresence>
          <motion.h1
            key={Math.random()}
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute text-blue-500 whitespace-nowrap"
          >
            {currentWord}
          </motion.h1>
        </AnimatePresence>
      </div>
    </>
  )
}
