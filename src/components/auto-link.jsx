import React from "react"
import { Link } from "gatsby"
import { styled } from "styled-components"

const AutoLink = ({ to, children, light = false, ...rest }) => {
  const internal = to.startsWith("/")
  const resume = to.startsWith("/static")

  return (
    <>
      {resume ? (
        // Render a link to a static file (resume, PDFs). Callers that pass their own
        // className (e.g. the header nav) keep their own styling; others get the animated underline
        rest.className ? (
          <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
            {children || "Resume"}
          </a>
        ) : (
          <AnimatedA
            style={{
              color: `${light ? "var(--primary)" : "var(--primaryD)"}`,
            }}
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            {...rest}
          >
            {children || "Resume"}
          </AnimatedA>
        )
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
  /* as a grid child (standalone MDX line) it would stretch and so would the underline */
  justify-self: start;
  width: fit-content;
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
