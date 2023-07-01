import React from "react"
import Seo from "../seo"
import { graphql } from "gatsby"
import Layout from "../app"
import { MDXProvider } from "@mdx-js/react"
import { motion } from "framer-motion"

import Intro from "./intro"
import Image from "../image"
import Video from "../video"
import AutoLink from "../auto-link"

import { fadeIn } from "../../styles/animations"

export default function PostLayout({
  data: {
    mdx: {
      frontmatter: {
        title,
        thumbnail: { relativePath },
      },
    },
  },
  children,
}) {
  return (
    <Layout>
      <Image
        src={relativePath}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
      />
      <motion.div {...fadeIn}>
        <MDXProvider components={components}>{children}</MDXProvider>
      </motion.div>
    </Layout>
  )
}

//move all headings down one hierarchy for simplicity writing mdx (less #'s)
//apply all classNames that are specific to content within the flow here
const components = {
  Image,
  Video,
  Intro,
  AutoLink,
}

export const Head = () => <Seo />

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        slug
        thumbnail {
          relativePath
        }
      }
    }
  }
`
