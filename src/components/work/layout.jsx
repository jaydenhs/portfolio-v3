import React from "react"
import Seo from "../seo"
import { graphql } from "gatsby"
import Layout from "../app"
import { MDXProvider } from "@mdx-js/react"
import { motion } from "framer-motion"

import WorkCard from "../home/work-card"

import Intro from "./intro"
import Image from "../image"
import Video from "../video"
import AutoLink from "../auto-link"
import Quote from "./quote"
import NumberedList from "./numbered-list"
import SideBySide from "./side-by-side"

import { fadeIn } from "../../styles/animations"
import { styled } from "styled-components"
import tw from "twin.macro"

export default function PostLayout({
  data: {
    mdx: {
      frontmatter: {
        thumbnail: { relativePath },
      },
    },
  },
  pageContext: { next },
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
        <MDXProvider components={components}>
          <ContentWrapper className="content">{children}</ContentWrapper>
        </MDXProvider>
      </motion.div>
      <div className="mt-24 overflow-y-hidden reading-grid">
        <motion.p {...fadeIn} className="wide">
          Next project
        </motion.p>
        <WorkCard frontmatter={next.frontmatter} flipped clipped />
      </div>
    </Layout>
  )
}

const ContentWrapper = styled.div`
  & > *:nth-child(even) {
    ${tw`bg-slate-100`}
  }
`

const components = {
  blockquote: props => <Quote {...props} />,
  ol: props => <NumberedList {...props} />,
  Image,
  Video,
  Intro,
  AutoLink,
  SideBySide,
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
