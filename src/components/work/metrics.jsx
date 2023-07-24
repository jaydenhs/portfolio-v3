import React from "react"
import { styled } from "styled-components"
import tw from "twin.macro"

export default function Metrics({ disclaimer = false, children }) {
  return (
    <blockquote className="flex flex-col items-center space-y-12">
      <hr className="w-24 border-gray-300" />
      <QuoteContent className="text-center space-y-4">
        {children}
        {disclaimer && (
          <p className="text-gray-400 font-normal text-base pt-4">
            (some actual values omitted for confidentiality reasons)
          </p>
        )}
      </QuoteContent>
      <hr className="w-24 border-gray-300" />
    </blockquote>
  )
}

const QuoteContent = styled.div`
  & > * {
    ${tw`text-primary font-bold text-2xl`}
  }
`
