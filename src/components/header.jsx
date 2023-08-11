import * as React from "react"
import AutoLink from "./auto-link"
import { styled } from "styled-components"
import tw from "twin.macro"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <Nav className="reading-grid">
    <AutoLink className="wide" to="/">
      <Image
        className="w-12 h-12 transition-transform hover:scale-110 ease-in-out duration-400"
        src="logo.png"
      />
    </AutoLink>
  </Nav>
)

const Nav = styled.nav`
  ${tw`py-8 fixed z-50 w-full`}
`

export default Header
