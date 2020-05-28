const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulPost {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Error loading posts", JSON.stringify(result.errors))
  }

  // Create blog-list pages
  const posts = result.data.allContentfulPost.nodes

  const postsPerPage = 2
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  result.data.allContentfulPost.nodes.forEach(post => {
    actions.createPage({
      path: `/${post.slug}/`,
      component: require.resolve("./src/templates/post-template.js"),
      context: {
        slug: post.slug,
      },
    })
  })
}
