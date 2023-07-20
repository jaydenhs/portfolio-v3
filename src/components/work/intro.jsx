import React from "react"
import { styled } from "styled-components"
import tw from "twin.macro"

export default function Intro({ children, tableData }) {
  return <Section className="reading-grid">{children}</Section>
}

const Section = styled.section`
  ${tw`mx-auto space-y-10`}

  & h2 {
    ${tw`font-bold text-gray-400`}
  }

  & strong {
    ${tw`text-gray-600`}
  }

  & table {
    ${tw`w-full`}
  }

  & th {
    ${tw`text-gray-400`}
  }

  & td {
    ${tw`text-gray-600`}
  }
`
