import React, { useState, useRef, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const SearchTitle = styled.h1`
  text-align: center;
`
const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  padding: 0 0.5em;
  font-family: 'Libreville', 'Times New Roman', Times, serif;
  display: block;
  margin: 1em auto;
`
const Result = styled.div`
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 1em 0 0;
`
const PostDate = styled.p`
  margin-top: 0;
`

const Search = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  const searchInput = useRef(null)
  const [filteredPosts, updateFilteredPosts] = useState([])

  const handleSearch = () => {
    const filtered = posts.filter(post => {
      if (searchInput.current.value) {
        return post.node.frontmatter.title
          .toLowerCase()
          .includes(searchInput.current.value)
      }
    })

    updateFilteredPosts(filtered)
    console.log(filteredPosts)
  }

  const results = filteredPosts.map((post, index) => (
    <Result key={index}>
      <Link to={post.node.fields.slug}>
        <h3>{post.node.frontmatter.title}</h3>
        <PostDate>{post.node.frontmatter.date}</PostDate>
        <p>{post.node.excerpt}</p>
      </Link>
    </Result>
  ))

  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: `Something about us` }]}
        title={`Wren Lane | Search`}
      />
      <div>
        <SearchTitle>Search</SearchTitle>
        <SearchInput
          onChange={handleSearch}
          type="text"
          placeholder={`Search by title...`}
          ref={searchInput}
        />
        {results}
      </div>
    </Layout>
  )
}

export default Search

export const searchQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
          }
        }
      }
    }
  }
`
