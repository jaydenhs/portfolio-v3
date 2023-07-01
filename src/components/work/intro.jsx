import React from "react"
import { styled } from "styled-components"
import tw from "twin.macro"

export default function Intro({ children }) {
  return <Section className="reading">{children}</Section>
}

const Section = styled.section`
  ${tw`mx-auto space-y-10`}

  & h2 {
    ${tw`font-bold text-gray-400`}
  }

  & a {
    ${tw`text-gray-600`}
  }

  & table {
    ${tw`w-full`}
  }

  & th {
    ${tw`text-left font-bold text-gray-400`}
  }

  & td {
    ${tw`align-top text-gray-600`}
  }
`
