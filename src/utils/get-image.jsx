import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useCallback, useMemo } from "react"

// Returns find(src, dir) -> gatsbyImageData | undefined.
// `dir` (content folder, e.g. "LLAG") is preferred over a bare filename match so identically named files in different folders don't clash
export function useFindImage() {
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

  return useCallback(
    (src, dir) => {
      const matchesName = ({ relativePath, relativeDirectory }) =>
        relativeDirectory
          ? `${relativeDirectory}/${src}` === relativePath
          : `${src}` === relativePath
      const inDir = ({ relativeDirectory }) =>
        relativeDirectory === dir || relativeDirectory.startsWith(`${dir}/`)
      // within the entry's own folder, tolerate case mismatches like thumbnail.png vs thumbnail.PNG
      const matchesNameLoose = ({ relativePath }) =>
        relativePath.toLowerCase().endsWith(`/${src}`.toLowerCase())

      const matchedImage =
        (dir && data.allFile.nodes.find(n => matchesName(n) && inDir(n))) ||
        (dir &&
          data.allFile.nodes.find(n => inDir(n) && matchesNameLoose(n))) ||
        data.allFile.nodes.find(matchesName)

      return matchedImage?.childImageSharp?.gatsbyImageData
    },
    [data]
  )
}

export default function GetImage({ src, dir }) {
  const find = useFindImage()
  return useMemo(() => find(src, dir), [find, src, dir])
}
