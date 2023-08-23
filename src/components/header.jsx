import React, { useState, useEffect } from "react"
import AutoLink from "./auto-link"
import { styled } from "styled-components"
import tw from "twin.macro"
import Image from "./image"
import Resume from "../../static/resume.pdf"

const Header = ({ scrollContainerRef }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = scrollContainerRef?.current.scrollTop

      if (prevScrollPos > currentScrollPos) {
        setIsHeaderVisible(true)
      } else {
        setIsHeaderVisible(false)
      }

      setPrevScrollPos(currentScrollPos)
    }

    scrollContainerRef?.current.addEventListener("scroll", handleScroll)
  }, [prevScrollPos, scrollContainerRef])

  return (
    <header className={`fixed h-16 bg-white z-50 reading-grid w-full`}>
      <Nav className="wide flex items-center justify-between">
        <AutoLink to="/">
          <Image
            className="w-12 h-12 transition-transform hover:scale-110 ease-in-out duration-400"
            src="logo.png"
          />
        </AutoLink>
        <div className="space-x-12 text-lg">
          <AutoLink to="/">Home</AutoLink>
          <AutoLink to="/about">About</AutoLink>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </Nav>
    </header>
  )
}

const Nav = styled.nav`
  ${tw`w-full`}
`

export default Header
