import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Image from "../image"

export default function WorkCard({
  frontmatter: {
    thumbnail: { relativePath },
    company,
    title,
    description,
    slug,
  },
}) {
  return (
    <motion.div className="flex items-center">
      <Link to={slug} className="w-full">
        <Image src={relativePath} className="w-full rounded-3xl" />
        <div className="grid grid-cols-2 p-4">
          <div>
            <h2>{company}</h2>
            <h2>{title}</h2>
          </div>
          <p>{description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
