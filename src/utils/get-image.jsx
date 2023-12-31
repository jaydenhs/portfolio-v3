import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useMemo } from "react"

export default function GetImage({ src }) {
  const data = useStaticQuery(
    graphql`
      query getAllImages {
        allFile(
          filter: {
            internal: { mediaType: { regex: "/image/" } }
            extension: { nin: ["ico", "svg"] }
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
      data.allFile.nodes.find(({ relativePath, relativeDirectory }) => {
        if (relativeDirectory) {
          return `${relativeDirectory}/${src}` === relativePath
        } else {
          return `${src}` === relativePath
        }
      }),
    [data, src]
  )

  const image = matchedImage?.childImageSharp?.gatsbyImageData

  return image
}
