import React from "react"
import { styled } from "styled-components"
import tw from "twin.macro"

export default function Metrics({ disclaimer = false, children }) {
  return (
    <blockquote className="flex flex-col items-center py-8">
      <QuoteContent className="text-center space-y-3">
        {children}
        {disclaimer && (
          <p className="text-gray-400 font-normal text-base pt-2">
            (actual values omitted for confidentiality reasons)
          </p>
        )}
      </QuoteContent>
    </blockquote>
  )
}

const QuoteContent = styled.div`
  & > * {
    ${tw`text-primary font-bold text-2xl`}
  }
`
