import React from "react"
import ReactTooltip from "react-tooltip"
import Svg from "../svg"
import styled, { keyframes, css } from "styled-components"
import tw from "twin.macro"

const RoomObject = ({
  children,
  src,
  tooltip,
  width,
  left,
  top,
  className,
}) => {
  let place = top > 50 ? "top" : "bottom"

  // convert all illustration-specific props to arrays (or else we can't map over strings)
  // could simply wrap all inputs in [], but that's inefficient for inputs
  let src_array = Array.isArray(src) ? src : [src]
  let width_array = Array.isArray(width) ? width : [width]
  let left_array = Array.isArray(left) ? left : [left]
  let top_array = Array.isArray(top) ? top : [top]
  let className_array = Array.isArray(className) ? className : [className]

  return (
    <Wrapper>
      <ObjectWrapper tooltip={tooltip}>
        {src_array.map((value, i) => {
          return (
            <div
              key={i}
              // do NOT use randomly generated crypto key for data-tip
              // unless you want react-tooltip to break on subsequent refreshes :,)
              data-tip={src_array[0]}
              data-for={src_array[0]}
              className={`absolute h-auto ${className_array[i]}`}
              style={{
                width: `${width_array[i]}%`,
                left: `${left_array[i]}%`,
                top: `${top_array[i]}%`,
              }}
            >
              {/* only render glowing pointer once for double tooltips */}
              {/* render it on the last object so point stays at the highest z-index on hover */}
              {tooltip && i === src_array.length - 1 && <Pointer />}
              <Svg src={value} />
            </div>
          )
        })}
      </ObjectWrapper>
      {tooltip && (
        <Tooltip
          id={src_array[0]}
          aria-haspopup="true"
          place={place}
          type="light"
          effect="float"
        >
          {children}
        </Tooltip>
      )}
    </Wrapper>
  )
}

const ObjectWrapper = styled.span(
  ({ tooltip }) => css`
    &:hover div {
      ${tooltip &&
      tw`transform-gpu transition-transform duration-500 group-hover:-translate-y-2`}
    }
  `
)

const Wrapper = styled.div``

const Tooltip = styled(ReactTooltip)`
  border: 5px solid var(--primaryLight) !important;
  border-radius: 1rem !important;
  padding: 1rem !important;
  width: max(20%, 12rem);
`

const glowing = keyframes`
    0% {
      box-shadow: 0 0 0px 0px;
    }
    50% {
      box-shadow: 0 0 10px 3px #4895ea;
    }
    100% {
      box-shadow: 0 0 0px 0px;
    }
`

const Pointer = styled.span`
  //center pointer
  ${tw`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
  ${tw`bg-white border-2 border-solid w-4 h-4 rounded-full z-40`}

  border-color: #4895ea;
  animation: ${glowing} 2.5s infinite;
  -webkit-animation: ${glowing} 2.5s infinite;
  -moz-animation: ${glowing} 2.5s infinite;
  -o-animation: ${glowing} 2.5s infinite;
`

export default RoomObject
