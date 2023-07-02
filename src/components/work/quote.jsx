import React from "react"
import { styled } from "styled-components"
import tw from "twin.macro"

export default function Quote({ children }) {
  return (
    <blockquote className="flex flex-col items-center space-y-6">
      <hr className="w-24 border-gray-300" />
      <QuoteContent className="text-center space-y-2">{children}</QuoteContent>
      <hr className="w-24 border-gray-300" />
    </blockquote>
  )
}

const QuoteContent = styled.div`
  & > * {
    ${tw`text-red-700 text-lg`}
  }

  & > *:last-child {
    ${tw`text-gray-500 text-base`}
  }
`
