import React from "react"
import { styled } from "styled-components"
import tw from "twin.macro"

export default function Metrics({ children }) {
  return (
    <blockquote className="flex flex-col items-center space-y-12">
      <hr className="w-24 border-gray-300" />
      <QuoteContent className="text-center space-y-4">{children}</QuoteContent>
      <hr className="w-24 border-gray-300" />
    </blockquote>
  )
}

const QuoteContent = styled.div`
  & > * {
    ${tw`text-primary font-bold text-2xl`}
  }

  & > *:last-child {
    ${tw`text-gray-400 font-normal text-base pt-4`}
  }
`
