const path = require("path")

const postTemplate = path.resolve(`./src/components/work/layout.jsx`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      allMdx(sort: { frontmatter: { priority: DESC } }) {
        nodes {
          id
          frontmatter {
            title
            company
            description
            slug
            priority
            thumbnail
            color
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  const posts = data.allMdx.nodes

  posts.forEach((node, index) => {
    const next = index === posts.length - 1 ? posts[0] : posts[index + 1]

    actions.createPage({
      path: node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        next,
        color: node.frontmatter.color,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(glb|gltf)$/i,
          use: {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        },
      ],
    },
  })
}
