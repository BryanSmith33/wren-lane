import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const InstaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: 3em;
  &:hover > div {
    opacity: 1;
  }
`
const InstaOverlay = styled.div`
  transition: all 0.3s ease;
  position: absolute;
  width: 100%;
  background: #11111191;
  z-index: 2;
  height: 100%;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const InstaFollowBtn = styled.button`
  background: transparent;
  border: 2px solid #bba432;
  color: #fff;
  text-transform: uppercase;
  padding: 1em;
  font-family: 'Quicksand';
  font-weight: bold;
  font-size: 1em;
`

class Insta extends Component {
  render() {
    return (
      <InstaContainer>
        <InstaOverlay>
          <InstaFollowBtn>follow us on the gram</InstaFollowBtn>
        </InstaOverlay>
        <StaticQuery
          query={graphql`
            query {
              allInstaNode(limit: 8) {
                edges {
                  node {
                    id
                    likes
                    original
                    localFile {
                      childImageSharp {
                        fixed(width: 150, height: 150) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                }
              }
            }
          `}
          render={({ allInstaNode }) => {
            const postsData = allInstaNode.edges
            const postsDisplay = postsData.map(post => (
              <Img
                key={post.node.id}
                fixed={post.node.localFile.childImageSharp.fixed}
              />
            ))
            return postsDisplay
          }}
        />
      </InstaContainer>
    )
  }
}

export default Insta
