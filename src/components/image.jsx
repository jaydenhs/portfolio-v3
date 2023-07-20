import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { useMemo } from "react"
import { motion } from "framer-motion"

export default function Image({
  src,
  imgClassName,
  divClassName,
  maxWidth,
  shared,
  ...rest
}) {
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
            relativeDirectory
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    `
  )

  const matchedImage = useMemo(
    () =>
      data.allFile.nodes.find(
        ({ relativePath, relativeDirectory }) =>
          `${relativeDirectory}/${src}` === relativePath
      ),
    [data, src]
  )

  const image = matchedImage?.childImageSharp?.gatsbyImageData

  return !!image ? (
    <motion.div
      transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
      layoutId={shared && src}
      className={`overflow-hidden ${maxWidth && "mx-auto"} ${divClassName}`}
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
