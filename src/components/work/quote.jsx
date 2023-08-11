import React from "react"
import { styled } from "styled-components"
import tw from "twin.macro"
import Image from "../image"

export default function Quote({ children, author, authorImg }) {
  console.log({ children })
  return (
    <blockquote className="flex flex-col items-center">
      <hr className="w-24 border-gray-300 mb-6" />
      <div className="flex flex-col space-y-4">
        <QuoteContent>{children}</QuoteContent>
        <div className="flex text-gray-500 text-base items-center space-x-3">
          {authorImg && <Image className="w-10 rounded-full" src={authorImg} />}
          <p>{author}</p>
        </div>
      </div>
      <hr className="w-24 border-gray-300 mt-4" />
    </blockquote>
  )
}

const QuoteContent = styled.div`
  ${tw`text-primary-dark space-y-4`}
  & > * {
    ${tw`text-lg`}
  }
`
