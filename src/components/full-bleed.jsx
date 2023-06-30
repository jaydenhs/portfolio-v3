import React from "react"

const FullBleed = ({ children, ...rest }) => {
  return (
    <div className="full-bleed" {...rest}>
      {children}
    </div>
  )
}

export default FullBleed
