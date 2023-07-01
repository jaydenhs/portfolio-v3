import * as React from "react"
import AutoLink from "./auto-link"
import { styled } from "styled-components"
import tw from "twin.macro"

const Header = ({ siteTitle }) => (
  <Nav>
    <AutoLink to="/">{siteTitle}</AutoLink>
  </Nav>
)

const Nav = styled.nav`
  ${tw`px-4 sm:px-16 py-8 fixed z-50 w-full`}
`

export default Header
