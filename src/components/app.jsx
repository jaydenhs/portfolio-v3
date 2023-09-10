import React from "react"
import Seo from "./seo"
import "../styles/global.css"

import Header from "./header"

export default function App({ children, page }) {
  return (
    <div className="scroll-container">
      <Header page={page} />
      <div className="scroll-content">
        <main className="pt-16">{children}</main>
      </div>
      <Seo />
    </div>
  )
}
