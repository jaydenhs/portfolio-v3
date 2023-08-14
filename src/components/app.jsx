import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/global.css"

import Header from "./header"

export default function App({ children, className }) {
  const scrollContainerRef = useRef(null)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      <Header
        scrollContainerRef={scrollContainerRef}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <div className="scroll-content">
        <main className="pt-16">{children}</main>
      </div>
    </div>
  )
}
