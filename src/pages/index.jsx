import React, { useState, useEffect } from "react"

import App from "../components/app"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Hero from "../components/home/hero"
import WorkCard from "../components/home/work-card"

const IndexPage = ({ data }) => {
  const [clickedSlug, setClickedSlug] = useState(null)
  const handleClick = slug => {
    setClickedSlug(slug)
  }

  return (
    <App page="Portfolio">
      <Hero />
      <div className="reading-grid space-y-16 md:space-y-24 mb-24">
        {data.allMdx.nodes.map(({ frontmatter }) => {
          return (
            <WorkCard
              frontmatter={frontmatter}
              onClick={handleClick}
              isClicked={clickedSlug === frontmatter.slug}
            />
          )
        })}
      </div>
    </App>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query getPosts {
    allMdx(sort: { frontmatter: { priority: DESC } }) {
      nodes {
        frontmatter {
          thumbnail
          company
          title
          description
          slug
        }
      }
    }
  }
`
