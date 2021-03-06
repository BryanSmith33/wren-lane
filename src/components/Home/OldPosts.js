import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SubscribeForm from '../Subscribe'

const PostContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`
const PostLink = styled(Link)`
  width: 310px;
  margin: 1.5em 1.5em 0;
  position: relative;
  @media (max-width: 770px) {
    width: 100%;
    margin: 1.5em 0 0 1.5em;
  }
`
const PostTitle = styled.h2`
  font-family: 'Libreville', 'Times New Roman', Times, serif;
  font-weight: 100;
  margin-bottom: 0;
`
const PostDate = styled.h3`
  font-family: 'Quickie', Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: 0;
  transform: rotate(-90deg);
  position: absolute;
  left: -70px;
  top: 105px;
`
const Image = styled(Img)`
  width: 310px;
  height: 325px;
  transition: all 0.3s;
  @media (max-width: 770px) {
    width: 100%;
  }
`

const Posts = ({ postInfo }) => {
  return (
    <PostContainer>
      {postInfo.map(
        ({ node }, index) =>
          postInfo.length > 3 && index === postInfo.length - 3 ? (
            <Fragment key={index}>
              <PostLink to={node.fields.slug}>
                <Fragment>
                  <PostTitle>{node.frontmatter.title}</PostTitle>
                  <PostDate>{node.frontmatter.date}</PostDate>
                  <Image
                    sizes={node.frontmatter.heroImage.childImageSharp.sizes}
                    alt={node.frontmatter.title}
                  />
                  <p>{node.excerpt}</p>
                </Fragment>
              </PostLink>
              <SubscribeForm />
            </Fragment>
          ) : (
            <PostLink to={node.fields.slug} key={index}>
              <Fragment>
                <PostTitle>{node.frontmatter.title}</PostTitle>
                <PostDate>{node.frontmatter.date}</PostDate>
                <Image
                  sizes={node.frontmatter.heroImage.childImageSharp.sizes}
                  alt={node.frontmatter.title}
                />
                <p>{node.excerpt}</p>
              </Fragment>
            </PostLink>
          )
      )}
    </PostContainer>
  )
}

export default Posts
