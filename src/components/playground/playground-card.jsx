import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Image from "../image"
import { Arrow } from "../arrow"

// Resolves "<dir>/images/<file>.mp4" to its bundled URL (extension kept literal so webpack only bundles mp4s)
const videoUrl = (dir, file) =>
  require(`../../playground/${dir}/images/${file.replace(/\.mp4$/, "")}.mp4`)
    .default

// `link` is optional: "/path" -> internal write-up, "https://..." -> external, absent -> showcase only
// `thumbnailVideo` is optional: a looping mp4 played over the `thumbnail` image, which sets the aspect ratio
export default function PlaygroundCard({
  frontmatter: { thumbnail, thumbnailVideo, link },
  dir,
}) {
  // The frame clips the media, so hover zooms inside it instead of growing the card
  const image = (
    <div className="relative overflow-hidden rounded-xl">
      <motion.div
        className="relative"
        {...(link && {
          whileHover: { scale: 1.05 },
          transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
        })}
      >
        <Image src={thumbnail} dir={dir} />
        {thumbnailVideo && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={videoUrl(dir, thumbnailVideo)}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
        )}
      </motion.div>
    </div>
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
