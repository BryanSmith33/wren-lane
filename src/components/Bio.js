import React from 'react'
import styled from 'styled-components'
import Beeg from '../../content/assets/images/beeg.png'
import Lindsey from '../../content/assets/images/lindsey.png'

const BioContainer = styled.div`
  display: flex;
  align-items: center;
`
const BioPic = styled.img`
  height: 75px;
  border-radius: 50%;
  margin: 1em;
`
const BioLink = styled.a`
  text-decoration: underline;
`
const authors = {
  beeg: {
    name: 'Beeg',
    img: Beeg,
  },
  lindsey: {
    name: 'Lindsey',
    img: Lindsey,
  },
}
const Bio = ({ author }) => {
  return (
    <BioContainer>
      <BioPic src={authors[author].img} alt={`author`} />
      <p>
        Written with love by {authors[author].name}.{` `}
        <BioLink target="_blank" href="https://www.instagram.com/wren.lane/">
          Follow us on Instagram.
        </BioLink>
      </p>
    </BioContainer>
  )
}

export default Bio
