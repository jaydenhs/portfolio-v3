import React from "react"
import { styled } from "styled-components"
import tw from "twin.macro"

export default function Metrics({ disclaimer = false, children }) {
  return (
    <blockquote className="flex flex-col items-center py-8 space-y-5">
      <QuoteContent className="text-center space-y-3">{children}</QuoteContent>
      {disclaimer && (
        <p className="text-gray-400 font-normal text-base">
          (actual values omitted for confidentiality reasons)
        </p>
      )}
    </blockquote>
  )
}

const QuoteContent = styled.div`
  & > * {
    ${tw`text-primary font-bold text-2xl`}
  }
`
