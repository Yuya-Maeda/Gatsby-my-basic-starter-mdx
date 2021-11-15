// This is creating pages for mdx
const path = require("path") // path module from node.js syntax

// create mdx pages dynamically with using slug on frontmatter to set path

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___category)
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `)

  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/posts/${slug}`, // set path
      component: path.resolve(`src/templates/post-template.js`), // indicating which tempalte to use for generate pages
      context: {
        slug,
      },
    })
  })

  result.data.categories.distinct.forEach(category => {
    createPage({
      path: `/${category}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category,
      },
    })
  })
}
