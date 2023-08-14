import React from "react"
import Seo from "../seo"
import { graphql } from "gatsby"
import App from "../app"
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
import Table from "./table"
import BeforeAndAfter from "./before-and-after"
import Grid from "./grid"
import GridCell from "./grid-cell"
import GridCellDesktop from "./grid-cell-desktop"
import Metrics from "./metrics"

import { fadeIn } from "../../styles/animations"
import { styled, css } from "styled-components"
import tw from "twin.macro"

export default function PostLayout({
  data: {
    mdx: {
      frontmatter: { thumbnail },
    },
  },
  pageContext: { color, next },
  children,
}) {
  return (
    <App>
      <Image
        src={thumbnail}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        shared
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
        <WorkCard frontmatter={next.frontmatter} flipped clipped isNextCard />
      </div>
    </App>
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
    --primaryD: hsl(${color[0]}, ${color[1]}%, ${color[2] - 15}%);
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
  Table,
  BeforeAndAfter,
  Grid,
  GridCell,
  GridCellDesktop,
  Metrics,
  Quote,
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
        thumbnail
      }
    }
  }
`
