import React from "react"
import { styled } from "styled-components"
import tw from "twin.macro"

export default function NumberedList({ children }) {
  return <StyledOl>{children}</StyledOl>
}

const StyledOl = styled.ol`
  counter-reset: my-counter;
  ${tw`list-none py-4 pl-0 space-y-8`}

  li {
    counter-increment: my-counter;
    ${tw`relative flex items-start`}
  }

  li:before {
    content: counter(my-counter) ".";
    ${tw`flex-shrink-0 w-16 h-16 mr-4 text-2xl py-4 text-center rounded-full bg-blue-100`}
  }
`
