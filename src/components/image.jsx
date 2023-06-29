import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { useMemo } from "react"
import { motion } from "framer-motion"

export default function Image({ src }) {
  const data = useStaticQuery(
    graphql`
      query getAllImages {
        allFile(
          filter: {
            internal: { mediaType: { regex: "/image/" } }
            extension: { ne: "ico" }
          }
        ) {
          nodes {
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    `
  )

  const matchedImage = useMemo(
    () => data.allFile.nodes.find(({ relativePath }) => src === relativePath),
    [data, src]
  )

  const image = matchedImage?.childImageSharp?.gatsbyImageData

  return !!image ? (
    <motion.div transition={{ ease: [0.37, 0, 0.63, 1] }} layoutId={src}>
      <GatsbyImage image={image} />
    </motion.div>
  ) : (
    <p>Image not found</p>
  )
}
