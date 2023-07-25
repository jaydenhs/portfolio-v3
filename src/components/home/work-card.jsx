import React from "react"
import AutoLink from "../auto-link"
import { motion } from "framer-motion"
import Image from "../image"
import { fadeIn, fadeInCard } from "../../styles/animations"

export default function WorkCard({
  frontmatter: { thumbnail, company, title, description, slug },
  flipped,
  clipped,
  onClick,
  isClicked = false,
  isNextCard = false,
}) {
  const flippedClass = flipped ? "flex-col-reverse" : "flex-col"

  return (
    <motion.div
      className="wide flex items-center"
      style={{ marginBottom: clipped ? "-10%" : "" }}
      onClick={() => {
        onClick && onClick(slug)
      }}
    >
      <AutoLink to={slug} className={`w-full flex ${flippedClass}`}>
        <Image
          src={thumbnail}
          divClassName="rounded-3xl"
          {...(!(isClicked || isNextCard) && fadeInCard)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          shared
        />
        <motion.div {...fadeIn} className="grid grid-cols-2 gap-4 py-6">
          <div className="space-y-1">
            <h2 className="font-bold">{company}</h2>
            <h3 className="font-bold text-gray-500">{title}</h3>
          </div>
          <p>{description}</p>
        </motion.div>
      </AutoLink>
    </motion.div>
  )
}
