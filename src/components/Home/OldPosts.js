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
  font-family: 'Libre Baskerville';
  font-weight: 100;
  margin-bottom: 0;
`
const PostDate = styled.h3`
  font-family: 'Quicksand';
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
const PostExcerpt = styled.p`
  line-height: 1.3em;
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
                  <PostExcerpt>{node.excerpt}</PostExcerpt>
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
                <PostExcerpt>{node.excerpt}</PostExcerpt>
              </Fragment>
            </PostLink>
          )
      )}
    </PostContainer>
  )
}

export default Posts
