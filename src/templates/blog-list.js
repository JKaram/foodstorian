import React from "react"
import { graphql } from "gatsby"

import { Layout, AboutSection, BlogItem } from "../components/index"

export default props => {
  console.log(props)

  const data = props.data
  return (
    <Layout>
      <AboutSection />
      <div
        style={{ display: "flex", flexDirection: "column", margin: "0 auto" }}
      >
        {data.posts.nodes.map(post => {
          const description =
            post.description !== null ? post.description.description : null
          return (
            <BlogItem
              key={post.slug}
              slug={post.slug}
              image={post.image.resize.src}
              title={post.title}
              createdAt={post.createdAt}
              country={post.country}
              description={description}
            />
          )
        })}
      </div>
      <button></button>
    </Layout>
  )
}

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      sort: { fields: [createdAt], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        title
        slug
        country
        createdAt(formatString: "DD MMMM YYYY")
        description {
          description
        }
        image {
          resize(width: 640, height: 400) {
            width
            src
          }
        }
      }
    }
  }
`
