import React from "react"
import TextLoop from "react-text-loop"

import { styled } from "styled-components"
import tw from "twin.macro"

// look into individual letter reveal https://codepen.io/bekahmcdonald/pen/vYBXMOZ

export default function TextReveal() {
  return (
    <TextContainer>
      <TextLoop interval={6000}>
        <h1>product designer</h1>
        <h1>front-end developer</h1>
        <h1>concert pianist</h1>
        <h1>world traveller</h1>
      </TextLoop>
    </TextContainer>
  )
}

const TextContainer = styled.div`
  ${tw`mt-2`}

  & * {
    ${tw`text-blue-500`}
  }
`
