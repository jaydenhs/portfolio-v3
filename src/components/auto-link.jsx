import React from "react"
import { Link } from "gatsby"
import { styled } from "styled-components"

const AutoLink = ({ to, children, test, ...rest }) => {
  // internal link if to does not have "static" in it (primarily for resume) and does not start with /
  const regex = /^((?!static).)*$/
  const internal = regex.test(`${to}`) && `${to}`.startsWith("/")

  return (
    <>
      {internal ? (
        <Link to={to} {...rest}>
          {children}
        </Link>
      ) : (
        <AnimatedA
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
  color: var(--primary);
  background: linear-gradient(
      to right,
      rgba(100, 200, 200, 0),
      rgba(100, 200, 200, 0)
    ),
    linear-gradient(to right, var(--primary), var(--primaryL));
  /* linear-gradient(to right, var(--primary), var(--primary)); */
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
