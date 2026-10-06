import React from "react"
import { graphql } from "gatsby"

import App from "../components/app"
import Seo from "../components/seo"
import { motion } from "framer-motion"
import { fadeIn } from "../styles/animations"
import Masonry from "../components/playground/masonry"
// Folder names in display order. Reorder by moving lines; unlisted folders go last.
import order from "../playground/order.json"

const position = dir => {
  const i = order.indexOf(dir)
  return i === -1 ? order.length : i
}

const PlaygroundPage = ({ data }) => {
  return (
    <App page="Play">
      <motion.div className="reading-grid pt-12 pb-24" {...fadeIn}>
        <div className="wide space-y-12">
          <div className="space-y-5">
            <h1>Playground</h1>
            <p className="text-lg">
              A showcase of the projects I've created while exploring my creative curiosities.
            </p>
          </div>
          <Masonry
            items={[...data.allMdx.nodes]
              .sort(
                (a, b) =>
                  position(a.parent.relativeDirectory) -
                  position(b.parent.relativeDirectory)
              )
              .map(({ id, frontmatter, parent }) => ({
                id,
                frontmatter,
                dir: parent.relativeDirectory,
              }))}
          />
        </div>
      </motion.div>
    </App>
  )
}

export default PlaygroundPage

export const Head = () => <Seo />

export const pageQuery = graphql`
  query getPlayground {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/src.playground./" } } }
    ) {
      nodes {
        id
        parent {
          ... on File {
            relativeDirectory
          }
        }
        frontmatter {
          thumbnail
          thumbnailVideo
          link
        }
      }
    }
  }
`
