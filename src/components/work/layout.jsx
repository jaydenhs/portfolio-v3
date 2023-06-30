import React from "react"
import Seo from "../seo"
import { graphql } from "gatsby"
import Layout from "../app"
import { MDXProvider } from "@mdx-js/react"
import Image from "../image"
import Video from "../video"
import { motion } from "framer-motion"
import Grid from "../grid"

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
        <Grid>
          <h1>{title}</h1>
          <MDXProvider components={components}>{children}</MDXProvider>
        </Grid>
      </motion.div>
    </Layout>
  )
}

//move all headings down one hierarchy for simplicity writing mdx (less #'s)
//apply all classNames that are specific to content within the flow here
const components = {
  h1: props => (
    <>
      <h2 {...props} className="mt-12 text-orange-500" />{" "}
      <hr className="mb-2" />
    </>
  ),
  h2: props => <h3 {...props} className="mt-6 mb-0" />,
  h3: props => <h4 {...props} className="mb-0.5" />,
  Image,
  Video,
  p: props => <p {...props} />,
  //   table: props => <table {...props} className="my-1 text-left" />,
  //   thead: props => <thead {...props} className="uppercase" />,
  //   th: props => (
  //     <th {...props} className="w-1/4 align-top text-gray-800 pb-0.5" />
  //   ),
  //   td: props => <td {...props} className="align-top text-gray-700 pr-4 pb-1" />,
  //   blockquote: props => <Quote {...props} />,
  //   ol: props => <ol {...props} className="list-decimal pl-8 space-y-1" />,
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
