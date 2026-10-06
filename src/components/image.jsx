import React, { createContext, useContext } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import GetImage from "../utils/get-image"

// Content folder that bare `src` filenames resolve against first (set by write-up layouts)
export const ImageDirContext = createContext(null)

export default function Image({
  src,
  dir,
  imgClassName,
  className,
  maxWidth,
  shared,
  caption,
  ...rest
}) {
  const contextDir = useContext(ImageDirContext)
  let image = GetImage({ src: src, dir: dir ?? contextDir })

  return !!image ? (
    <motion.div
      transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
      layoutId={shared && src}
      className={`overflow-hidden ${maxWidth && "mx-auto"} ${className}`}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      <motion.div className="flex flex-col h-full items-center" {...rest}>
        <GatsbyImage
          image={image}
          className={`w-full ${imgClassName} h-full`}
          imgClassName="object-cover"
        />
        {caption && <p className="text-gray-400">{caption}</p>}
      </motion.div>
    </motion.div>
  ) : (
    <p>Image not found</p>
  )
}
