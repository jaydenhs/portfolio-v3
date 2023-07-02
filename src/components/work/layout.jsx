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
import Quote from "./quote"
import NumberedList from "./numbered-list"

import { fadeIn } from "../../styles/animations"
import { styled } from "styled-components"
import tw from "twin.macro"

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
      <Image src={relativePath} />
      <motion.div {...fadeIn}>
        <MDXProvider components={components}>
          <ContentWrapper>{children}</ContentWrapper>
        </MDXProvider>
      </motion.div>
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
