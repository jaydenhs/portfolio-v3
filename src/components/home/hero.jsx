import React from "react"
import { motion } from "framer-motion"

import { fadeIn } from "../../styles/animations"

export default function Hero() {
  return (
    <motion.div {...fadeIn} className="reading-grid py-64">
      <h1 className="wide">Hi, I'm Jayden</h1>
    </motion.div>
  )
}
