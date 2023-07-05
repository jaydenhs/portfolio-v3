import React from "react"
import AutoLink from "../auto-link"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Image from "../image"
import { fadeIn } from "../../styles/animations"

export default function WorkCard({
  frontmatter: {
    thumbnail: { relativePath },
    company,
    title,
    description,
    slug,
  },
  flipped,
  clipped,
}) {
  const flippedClass = flipped ? "flex-col-reverse" : "flex-col"

  return (
    <motion.div
      className="mx-4 sm:mx-16 flex items-center"
      style={{ marginBottom: clipped ? "-10%" : "" }}
    >
      <AutoLink to={slug} className={`w-full flex ${flippedClass}`}>
        <Image
          src={relativePath}
          divClassName="rounded-3xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        />
        <motion.div {...fadeIn} className="grid grid-cols-2 md:px-6 px-0 py-6">
          <div>
            <h2 className="font-bold">{company}</h2>
            <h3 className="font-bold text-gray-500">{title}</h3>
          </div>
          <p>{description}</p>
        </motion.div>
      </AutoLink>
    </motion.div>
  )
}
