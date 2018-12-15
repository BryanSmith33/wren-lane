import React, { Fragment } from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import family from '../assets/images/family.jpg'

const AboutHeroImg = styled.img`
  height: 500px;
  float: left;
  margin: 0 1em 1em 0;
  @media (max-width: 800px){
    width: 100%;
    height: 100%;
  }
`
const IntroText = styled.p`
  margin-top: 0;
`
const PersonTitle = styled.h3``
const AboutText = styled.p``

const About = () => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[
        {
          name: 'description',
          content: `Home renovation, health, fashion and family blog`,
        },
        {
          name: 'keywords',
          content: `Home renovation, Health and Fitness, Family, Blog, Fashion`,
        },
      ]}
      title={`Wren Lane | About Us`}
    />
    <Fragment>
      <h1>About Us</h1>
      <AboutHeroImg src={family} alt="our family" />
      <IntroText>
        Welcome to Wren lane. This is where we share our experiences in home
        renovation, fashion, health and our overall life. Collectively we are
        the Smith's and for as plain as our last name may seem, we are an
        eclectic group that creates our family who loves to live life to the
        fullest.{' '}
      </IntroText>
      <PersonTitle>Lindsey</PersonTitle>
      <AboutText>
        Lindsey is truly the head of the Smith family, although Bryan may beg to
        differ. Lindsey is what allows all of this to exist as her official
        title may very well be profressional life juggler. She is brave, honest
        and one of the most hardworking people you could hope to meet. Lindsey's
        ambition is everything someone would hope to have in their lives and you
        see it in everything she does. Lindsey is a super mom by day and Realtor
        by all other hours.
      </AboutText>
      <AboutText>
        Fitness is one thing that drives Lindsey and she can often be found
        exercising and sharing her health journey with others. Her desire for
        improvement can be found in everything she does from renovating our
        guest bathroom to creating a delicous mac n cheese recipe that is also
        healthy.
      </AboutText>
      <PersonTitle>LitteLoveOne (LLO)</PersonTitle>
      <AboutText>
        LittleLoveOne is our oldest daughter. She is the perfect mix between
        Bryan and Lindsey. She is as goofy as can be and her belly laugh can be
        heard throughout the entire house. She is also extremely caring,
        sometimes so much so that LittleLoveTwo thinks it borders on smothering.
        You can often find her wrestling the dogs and asking how she can help
        her parents, even if it means getting her hands a little dirty.
      </AboutText>
      <PersonTitle>LitteLoveTwo (LLT)</PersonTitle>
      <AboutText>
        LittleLoveTwo is as fierce as can be. She packs an enourmous amount of
        personality in such a small body. She has an imagination that is
        unmatched by anyone else in the family. If there is one thing LLT loves
        more than anything, it is dance parties.
      </AboutText>
      <PersonTitle>Sperry</PersonTitle>
      <AboutText>
        Sperry is our bigger black and white dog. He is a Australian
        Shepherd/Golden Retriever mix. The best way to describe Sperry is that
        he doesn't know he is a dog. It's tough to describe but he is as odd a
        dog that you will find. He shares a lot of the same personalites as the
        other Smith's; kindness, goofiness and a love of adventure.
      </AboutText>
      <PersonTitle>Finn</PersonTitle>
      <AboutText>
        Finn is our smaller dog and he is a miniature Australian Shepherd. While
        Finn may be our families dog, Finn is really Lindsey's dog and he
        seemingly picks up her qualities. The more athletic and of the two dogs,
        he can seemingly play catch forever with his limitless energy.
      </AboutText>
    </Fragment>
  </Layout>
)

export default About
