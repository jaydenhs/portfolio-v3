import React from "react"
import { Link } from "gatsby"
import { styled } from "styled-components"

const AutoLink = ({ to, children, light = false, ...rest }) => {
  const internal = `${to}`.startsWith("/")

  return (
    <>
      {internal ? (
        <Link to={to} {...rest}>
          {children}
        </Link>
      ) : (
        <AnimatedA
          style={{ color: `${light ? "var(--primary)" : "var(--primaryD)"}` }}
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
