import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import {
  Layout,
  AboutSection,
  BlogItem,
  StyledLink,
  MobileMenu,
} from "../components/index"

export default props => {
  const data = props.data
  const { currentPage, numPages } = props.pageContext
  const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`
  const nextPage = currentPage === numPages ? null : `/blog/${currentPage + 1}`

  const [isNavOpen, setNavOpen] = useState(false)
  const toggleNav = () => {
    setNavOpen(!isNavOpen)
  }

  return (
    <Layout isNavOpen={isNavOpen} toggleNav={toggleNav}>
      {isNavOpen && <MobileMenu />}
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
            <LinkButton to={prevPage}>Previous</LinkButton>
          )}
          {nextPage && <LinkButton to={nextPage}>Next</LinkButton>}
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

const LinkButton = styled(StyledLink)`
  background: #000;
  color: #fff;
  padding: 10px 15px;
  width: 75px;
  text-align: center;
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
