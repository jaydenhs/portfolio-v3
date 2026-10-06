import React from "react"
import { useFindImage } from "../../utils/get-image"
import PlaygroundCard from "./playground-card"

// Left-to-right masonry: each item (in list order) goes into the currently shortest column.
// Heights are estimated from thumbnail aspect ratios, since every column has the same width.
// One layout per breakpoint is rendered and toggled with CSS, so SSR and hydration match.
const LAYOUTS = [
  { columns: 1, className: "md:hidden" },
  { columns: 2, className: "hidden md:flex lg:hidden" },
  { columns: 3, className: "hidden lg:flex" },
]

export default function Masonry({ items }) {
  const find = useFindImage()

  const sized = items.map(item => {
    const image = find(item.frontmatter.thumbnail, item.dir)
    return { ...item, height: image ? image.height / image.width : 1 }
  })

  return (
    <>
      {LAYOUTS.map(({ columns, className }) => (
        <div key={columns} className={`flex gap-4 ${className}`}>
          {distribute(sized, columns).map((column, i) => (
            <div key={i} className="flex flex-col gap-4 flex-1 min-w-0">
              {column.map(({ id, frontmatter, dir }) => (
                <PlaygroundCard key={id} frontmatter={frontmatter} dir={dir} />
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

function distribute(items, columns) {
  const result = Array.from({ length: columns }, () => [])
  const heights = Array(columns).fill(0)
  items.forEach(item => {
    const shortest = heights.indexOf(Math.min(...heights))
    result[shortest].push(item)
    heights[shortest] += item.height
  })
  return result
}
