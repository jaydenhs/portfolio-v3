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
import { styled, css } from "styled-components"
import tw from "twin.macro"

export default function PostLayout({
  data: {
    mdx: {
      frontmatter: {
        thumbnail: { relativePath },
      },
    },
  },
  pageContext: { color, next },
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
          <ContentWrapper color={color} className="content">
            {children}
          </ContentWrapper>
        </MDXProvider>
      </motion.div>
      <div className="pt-24 overflow-y-hidden reading-grid border-t-4 border-slate-150">
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
    ${tw`bg-gray-50`}
  }

  & > *:last-child {
    ${tw`pb-64`}
  }

  ${({ color }) => css`
    --primary: hsl(${color[0]}, ${color[1]}%, ${color[2]}%);
    --primaryL: hsl(${color[0]}, ${color[1]}%, ${color[2] + 20}%);
    --primaryLL: hsl(${color[0]}, ${color[1]}%, ${color[2] + 30}%);
  `}
`

const components = {
  blockquote: props => <Quote {...props} />,
  ol: props => <ol {...props} className="list-decimal pl-8 space-y-2" />,

  Image,
  Video,
  Intro,
  AutoLink,
  SideBySide,
  NumberedList,
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
