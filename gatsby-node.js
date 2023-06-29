const path = require("path")

const postTemplate = path.resolve(`./src/components/post-layout.jsx`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  data.allMdx.nodes.forEach(node => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
    })
  })
}
