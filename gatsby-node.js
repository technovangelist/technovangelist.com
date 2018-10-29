const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const conftalk = path.resolve('./src/templates/conf-talk.js')

    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                fileAbsolutePath
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "MM/DD/YY")
                  title
                  conference
                }
                excerpt
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges.filter(edge => {
          if (edge.node.fileAbsolutePath.indexOf('/posts/') >= 0) return edge
        })
        const talks = result.data.allMarkdownRemark.edges.filter(edge => {
          if (edge.node.fileAbsolutePath.indexOf('/talks/') >= 0) return edge
        })
        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node

          const next = index === 0 ? null : posts[index - 1].node
          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })
        _.each(talks, (talk, index) => {
          const previous =
            index === talks.length - 1 ? null : talks[index + 1].node
          const next = index === 0 ? null : talks[index - 1].node

          createPage({
            path: talk.node.fields.slug,
            component: conftalk,
            context: {
              slug: talk.node.fields.slug,
              previous,
              next,
            },
          })

          createPaginatedPages({
            edges: posts,
            createPage: createPage,
            pageTemplate: 'src/templates/blog-index.js',
            pageLength: 10,
            pathPrefix: 'blog',
            buildPath: (index, pathPrefix) =>
              index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, // This is optional and this is the default
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
