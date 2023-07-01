import React from "react"
import { motion } from "framer-motion"

import { fadeIn } from "../../styles/animations"

export default function Hero() {
  return (
    <motion.div {...fadeIn} className="mx-4 sm:mx-16 py-64">
      <h1 className="py-64">Hi, I'm Jayden</h1>
    </motion.div>
  )
}
