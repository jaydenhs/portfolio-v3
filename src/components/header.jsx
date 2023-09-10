import React, { useState } from "react"
import AutoLink from "./auto-link"
import { styled, css } from "styled-components"
import tw from "twin.macro"
import Image from "./image"
import Resume from "../../static/resume.pdf"

const links = [
  { text: "Portfolio", url: "/" },
  { text: "About", url: "/about" },
  { text: "Resume", url: Resume },
]

const Header = ({ page }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <header className={`fixed h-16 bg-white z-50 reading-grid w-full`}>
      <nav className="wide w-full flex items-center justify-between">
        <AutoLink to="/">
          <div
            className="w-12 h-12 relative transition-transform hover:scale-110 ease-in-out duration-400"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              className={`absolute z-10 ${isHovered ? "hidden" : ""}`}
              src={"logo.png"}
            />
            <Image className={"absolute"} src={"smiling.png"} />
          </div>
        </AutoLink>
        <div className="flex items-center h-full space-x-6 md:space-x-12 md:text-lg">
          {links.map(({ text, url, colour }, index) => {
            let match = page === text
            return (
              <Item to={url} key={index} match={match} colour={colour}>
                {text}
              </Item>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

const Item = styled(AutoLink)(
  ({ match }) => css`
    ${tw`flex items-center h-full no-underline transition-all relative duration-300`}
    ${match ? tw`text-primary` : tw`text-gray-500`}

    &:before {
      content: "";
      left: -10%;
      width: 120%;
      ${tw`h-1 bottom-0 absolute rounded-t-xl duration-300`}
      ${match ? tw`bg-primary opacity-100` : tw`bg-gray-300 opacity-0`}
    }

    &:hover:before {
      ${tw`opacity-100`}
    }
  `
)

export default Header
