/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import React from "react"
import { AnimatePresence } from "framer-motion"
import Loading from "./src/components/home/loading"

export const wrapPageElement = ({ props, element }) => {
  // Only show the LoadingScreen on the index page
  // if (props.location.pathname === "/") {
  //   return (
  //     <Loading>
  //       <AnimatePresence mode="wait" initial={false}>
  //         {element}
  //       </AnimatePresence>
  //     </Loading>
  //   )
  // }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {element}
    </AnimatePresence>
  )
}
