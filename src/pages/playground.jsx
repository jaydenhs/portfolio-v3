import React from "react"
import { graphql } from "gatsby"

import App from "../components/app"
import Seo from "../components/seo"
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
      <div className="reading-grid pt-12 pb-24">
        <div className="wide space-y-12">
          <div className="space-y-3">
            <h1>Playground</h1>
            <p className="text-gray-500">
              Welcome to my playground, a place where I can showcase the hobby
              projects I make for fun. Enjoy!
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
      </div>
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
          link
        }
      }
    }
  }
`
