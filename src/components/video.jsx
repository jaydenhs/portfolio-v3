import React, { useMemo } from "react"
import { motion } from "framer-motion"

function Video({ path }) {
  // const webm = require("../work/thumbnail.webm")
  return (
    <figure style={{ width: "100%" }}>
      <motion.video
        key="video"
        // layoutId="videoLayoutId"
        autoPlay="autoplay"
        loop="loop"
        muted
        playsInline
        style={{ width: "100%" }}
      >
        <source src={webm.default} type="video/webm" />
      </motion.video>
    </figure>
  )
}

export default React.memo(Video)
