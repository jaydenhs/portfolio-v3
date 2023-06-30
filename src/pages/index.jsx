import * as React from "react"

import Layout from "../components/app"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Image from "../components/image"
import Hero from "../components/home/hero"
import Grid from "../components/grid"
import WorkCard from "../components/home/work-card"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Grid>
        <Hero />
        {data.allMdx.nodes.map(({ frontmatter }) => {
          return <WorkCard frontmatter={frontmatter} />
        })}
      </Grid>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const pageQuery = graphql`
  query getPosts {
    allMdx {
      nodes {
        frontmatter {
          thumbnail {
            relativePath
          }
          company
          title
          description
          slug
        }
      }
    }
  }
`
