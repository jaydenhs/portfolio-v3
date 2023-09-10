import React from "react"
import { Link } from "gatsby"
import { styled } from "styled-components"

const AutoLink = ({ to, children, light = false, ...rest }) => {
  const internal = to.startsWith("/")
  const resume = to.startsWith("/static")

  return (
    <>
      {resume ? (
        // Render a link to an external resume
        <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
          Resume
        </a>
      ) : internal ? (
        // Render an internal link using Gatsby's Link
        <Link to={to} {...rest}>
          {children}
        </Link>
      ) : (
        // Render an animated link with custom styles
        <AnimatedA
          style={{
            color: `${light ? "var(--primary)" : "var(--primaryD)"}`,
          }}
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </AnimatedA>
      )}
    </>
  )
}

const AnimatedA = styled.a`
  background: linear-gradient(
      to right,
      rgba(100, 200, 200, 0),
      rgba(100, 200, 200, 0)
    ),
    linear-gradient(to right, var(--primary), var(--primaryL));
  background-size: 100% 0.1em, 0 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;

  &:hover,
  &:focus {
    background-size: 0 0.1em, 100% 0.1em;
  }
`

export default AutoLink
