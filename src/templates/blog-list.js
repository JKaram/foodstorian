import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { Layout, AboutSection, BlogItem, StyledLink } from "../components/index"

export default props => {
  const data = props.data
  const { currentPage, numPages } = props.pageContext
  const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`
  const nextPage = currentPage === numPages ? null : `/blog/${currentPage + 1}`
  console.log(props.location.pathname)

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
        <PaginationWrapper pathname={props.location.pathname}>
          {props.location.pathname !== "/blog" && (
            <StyledLink to={prevPage}>Previous</StyledLink>
          )}
          {nextPage && <StyledLink to={nextPage}>Next</StyledLink>}
        </PaginationWrapper>
      </div>
    </Layout>
  )
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: ${p =>
    p.pathname === "/blog" ? "flex-end" : "space-between"};
  width: 95%;
  margin: 10px 0;
`

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
