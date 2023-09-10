import React, { useEffect, useState } from "react"
import AutoLink from "../auto-link"
import { motion } from "framer-motion"
import Image from "../image"
import { fadeIn } from "../../styles/animations"

export default function WorkCard({
  frontmatter: { thumbnail, company, title, description, slug },
  flipped,
  clipped,
  onClick,
  isClicked = false,
  isNextCard = false,
}) {
  const flippedClass = flipped ? "flex-col-reverse" : "flex-col"

  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <motion.div
      className="wide flex items-center"
      style={{ marginBottom: clipped ? "-10%" : "" }}
      onClick={() => {
        onClick && onClick(slug)
      }}
    >
      <AutoLink to={slug} className={`w-full flex ${flippedClass}`}>
        <motion.div
          {...((isClicked || isNextCard) && isLoaded ? null : fadeIn)}
        >
          <Image
            src={thumbnail}
            className="rounded-3xl h-64 md:h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            shared
          />
        </motion.div>
        <motion.div
          {...fadeIn}
          className="grid grid-cols-2 gap-3 lg:gap-4 py-6"
        >
          <div className="col-span-2 lg:col-span-1 space-y-1">
            <h2 className="font-bold">{company}</h2>
            <h3 className="font-bold text-gray-500">{title}</h3>
          </div>
          <p className="col-span-2 lg:col-span-1">{description}</p>
        </motion.div>
      </AutoLink>
    </motion.div>
  )
}

// home -> page = no fade for clicked card, fade for all other cards
// page -> next page = no fade for clicked card
// page -> home = no transition
// we always want it to fade in and fade out unless the image is preserved
