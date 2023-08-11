import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import GetImage from "../utils/get-image"

export default function Image({
  src,
  imgClassName,
  className,
  maxWidth,
  shared,
  ...rest
}) {
  let image = GetImage({ src: src })

  return !!image ? (
    <motion.div
      transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
      layoutId={shared && src}
      className={`overflow-hidden ${maxWidth && "mx-auto"} ${className}`}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      <motion.div {...rest}>
        <GatsbyImage
          image={image}
          className={`w-full ${imgClassName}`}
          imgClassName="object-none"
        />
      </motion.div>
    </motion.div>
  ) : (
    <p>Image not found</p>
  )
}
