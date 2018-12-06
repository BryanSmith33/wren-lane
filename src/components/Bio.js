import React from 'react'
import styled from 'styled-components'
import Beeg from '../assets/images/beeg.png'
import Lindsey from '../assets/images/lindsey.png'

const BioContainer = styled.div`
  display: flex;
  align-items: center;
`
const BioText = styled.p`

`
const BioPic = styled.img`
  height: 75px;
  border-radius: 50%;
  margin: 1em;
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
      <BioText>
        Written with love by {authors[author].name}.
        <a href="https://www.instagram.com/wren.lane/">
          &nbsp;Follow us on Instagram
        </a>
      </BioText>
    </BioContainer>
  )
}

export default Bio
