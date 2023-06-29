import * as React from "react"
import { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Video from "../components/video"
import { motion } from "framer-motion"
import Image from "../components/image"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <motion.h1 exit={{ opacity: 0 }}>Welcome to my portfolio!</motion.h1>
      {data.allMdx.nodes.map(({ frontmatter: { thumbnail, slug, title } }) => {
        return (
          <motion.div
            // layoutId="wrapper"
            // transition={{ duration: 5 }}
            className="w-full h-full flex items-center"
          >
            <Link to={slug}>
              <Image src="test-dog.jpeg" />
            </Link>
          </motion.div>
        )
      })}
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
          slug
          title
        }
      }
    }
  }
`
