import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="fixed w-full z-50">
    <Link to="/">{siteTitle}</Link>
  </header>
)

export default Header
