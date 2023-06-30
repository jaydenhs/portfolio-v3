import React from "react"
import { motion } from "framer-motion"

import { fadeIn } from "../../styles/animations"

export default function Hero() {
  return (
    <motion.div {...fadeIn} className="py-64 bg-red-100">
      <h1>Hi, I'm Jayden</h1>
    </motion.div>
  )
}
