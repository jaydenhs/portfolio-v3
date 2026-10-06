import React from "react"

import App from "../components/app"
import Seo from "../components/seo"
import { motion } from "framer-motion"
import { fadeIn } from "../styles/animations"
// Display order = file order. Fields: title, award (optional), links: [{ label, url }]
import writing from "../data/writing.json"

const WritePage = () => {
  return (
    <App page="Write">
      <motion.div className="reading-grid pt-12 pb-24" {...fadeIn}>
        <div className="wide space-y-12">
          <div className="space-y-5">
            <h1>Writing</h1>
            <p className="text-lg">
              A select list of research papers and essays I've written over the
              years.
            </p>
          </div>
          <ul className="border-t border-gray-200">
            {writing.map(({ title, award, links = [] }) => {
              const linkRow = links.length > 0 && (
                <div className="flex flex-wrap gap-x-5 gap-y-1 shrink-0 md:justify-end">
                  {links.map(({ label, url }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 no-underline transition-colors duration-300 hover:text-black"
                    >
                      {label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              )

              return (
                <li
                  key={title}
                  className="flex flex-col gap-3 py-6 border-b border-gray-200"
                >
                  {award ? (
                    <>
                      <h3 className="font-bold text-black">{title}</h3>
                      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-8">
                        <AwardBadge>{award}</AwardBadge>
                        {linkRow}
                      </div>
                    </>
                  ) : (
                    // No award: links share the title's line
                    <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-8">
                      <h3 className="font-bold text-black">{title}</h3>
                      {linkRow}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </motion.div>
    </App>
  )
}

const AwardBadge = ({ children }) => (
  <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-amber-100 px-3 py-0.5 text-sm font-bold text-amber-800 ring-1 ring-inset ring-amber-300">
    <svg
      aria-hidden="true"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7.3L12 17.8 5.7 21.5l1.7-7.3L2 9.5l7.1-.6z" />
    </svg>
    {children}
  </span>
)

export default WritePage

export const Head = () => <Seo />
