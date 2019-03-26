import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'

import Bio from '../components/Bio'
import Layout from '../components/layout'

const PostTitle = styled.h1`
  margin-bottom: 0;
`
const PostDate = styled.p`
  margin: 0;
`
const PostText = styled.div`
  font-family: 'Quickie', Arial, Helvetica, sans-serif;
  font-weight: bold;
  line-height: 1.6em;
`
const InPostNavContainer = styled.ul`
  display: flex;
  justify-content: space-between;
`
const navAnimation = keyframes`
  0% {
    left: 0;
  }
  50% {
    left: 7px;
  }
  100% {
    left: 0;
  }
`
const InPostNav = styled.li`
  font-family: 'Quickie', Arial, Helvetica, sans-serif;
  list-style: none;
  transition: all 0.7s;
  font-weight: bold;
  &:hover {
    transition: all 0.9s;
    transform: scale(1.1);
    & span {
      position: relative;
      animation: ${navAnimation} 0.7s linear 2;
      animation-delay: 0.3s;
    }
  }
`

class BlogPostTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const author = post.frontmatter.author
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${siteTitle} | ${post.frontmatter.title}`}
        />
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDate>{post.frontmatter.date}</PostDate>
        <PostText dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <InPostNavContainer>
          <InPostNav>
            {next && (
              <Link to={next.fields.slug} rel="next">
                <span>←</span> {next.frontmatter.title}
              </Link>
            )}
          </InPostNav>
          <InPostNav>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                {previous.frontmatter.title} <span>→</span>
              </Link>
            )}
          </InPostNav>
        </InPostNavContainer>
        <Bio author={author} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const blogQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
      }
    }
  }
`
