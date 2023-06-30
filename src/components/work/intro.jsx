import React from "react"
import { styled } from "styled-components"
import tw from "twin.macro"

export default function Intro({ children }) {
  return <Section>{children}</Section>
}

const Section = styled.section`
  ${tw`w-1/2 mx-auto space-y-10`}

  & h2 {
    ${tw`font-bold text-gray-400`}
  }

  & a {
    ${tw`text-gray-600`}
  }
`
