import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const FeaturedImg = styled(Img)`
  width: 100%;
  margin-right: 2em;
`
const PostTitle = styled.h1`
  font-family: 'Libreville', 'Times New Roman', Times, serif;
  font-weight: 100;
  margin-bottom: 0;
`
const PostDate = styled.h3`
  font-family: 'Quickie', Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-top: 0;
`
const PostExcerpt = styled.p`
  line-height: 1.4em;
`
const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`
const FeaturedPost = ({ postInfo }, props) => {
  const { title, date, heroImage } = postInfo.node.frontmatter
  const { slug } = postInfo.node.fields
  return (
    <Link to={slug}>
      <PostInfo>
        <PostTitle>{title}</PostTitle>
        <PostDate>{date}</PostDate>
      </PostInfo>
      <FeaturedImg sizes={heroImage.childImageSharp.sizes} />
      <PostExcerpt>{postInfo.node.excerpt}</PostExcerpt>
    </Link>
  )
}

export default FeaturedPost
