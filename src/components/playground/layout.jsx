import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import Seo from "../seo"
import App from "../app"
import Image, { ImageDirContext } from "../image"
import Video from "../video"
import AutoLink from "../auto-link"
import Quote from "../work/quote"
import YouTube from "./youtube"
import PcaWidget from "./pca-widget"
import PcaExplainer from "./pca-explainer"

export default function PlaygroundLayout({
  data: {
    mdx: {
      frontmatter: { title, description },
      parent,
    },
  },
  children,
}) {
  return (
    <App page="Play">
      <div className="reading-grid gap-y-6 pt-12 pb-32 font-['Proxima_Nova'] text-base leading-relaxed [&>h1]:mt-12 lg:[&>h1]:mt-20 [&>a:first-child+h1]:mt-0">
        <AutoLink to="/playground" className="text-gray-500">
          ← Playground
        </AutoLink>
        {title && <h1 className="!mt-0">{title}</h1>}
        {description && <p className="text-gray-500">{description}</p>}
        <ImageDirContext.Provider value={parent?.relativeDirectory}>
          <MDXProvider components={components}>{children}</MDXProvider>
        </ImageDirContext.Provider>
      </div>
    </App>
  )
}

const components = {
  blockquote: props => <Quote {...props} />,
  Image,
  Video,
  AutoLink,
  Quote,
  YouTube,
  PcaWidget,
  PcaExplainer,
}

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export const pageQuery = graphql`
  query PlaygroundPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      parent {
        ... on File {
          relativeDirectory
        }
      }
      frontmatter {
        title
        description
      }
    }
  }
`
