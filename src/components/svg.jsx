import React from "react"

export default function Svg({ src }) {
  let svg_src = require(`../../static/images/about/${src}`)
  return <img src={svg_src.default} />
}
