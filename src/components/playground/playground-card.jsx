import React from "react"
import { Link } from "gatsby"
import Image from "../image"

// `link` is optional: "/path" -> internal write-up, "https://..." -> external, absent -> showcase only
export default function PlaygroundCard({
  frontmatter: { thumbnail, link },
  dir,
}) {
  const image = (
    <Image
      src={thumbnail}
      dir={dir}
      className="rounded-xl"
      {...(link && {
        whileHover: { scale: 1.05 },
        transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
      })}
    />
  )

  if (!link) {
    return <div>{image}</div>
  }

  const external = !link.startsWith("/")
  const Wrapper = external ? "a" : Link
  const linkProps = external
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : { to: link }

  return (
    <div>
      <Wrapper {...linkProps} className="group relative block no-underline">
        {image}
        <ArrowBadge />
      </Wrapper>
    </div>
  )
}

// On card hover the arrow exits to the top right while a copy enters from the bottom left
const ArrowBadge = () => (
  <span
    aria-hidden="true"
    className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/80 text-gray-900 shadow-sm backdrop-blur-md transition-colors duration-300 group-hover:bg-white"
  >
    <Arrow className="transition-transform duration-500 ease-[cubic-bezier(0.43,0.13,0.23,0.96)] group-hover:translate-x-6 group-hover:-translate-y-6" />
    <Arrow className="absolute -translate-x-6 translate-y-6 transition-transform duration-500 ease-[cubic-bezier(0.43,0.13,0.23,0.96)] group-hover:translate-x-0 group-hover:translate-y-0" />
  </span>
)

const Arrow = ({ className }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
)
