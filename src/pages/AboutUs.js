import * as React from "react"
import styled, { keyframes } from "styled-components"
import Layout from "../components/layout"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import Seo from "../components/seo"
import { BodyMain, H2, H3 } from "../components/styles/TextStyles"
import LazyLoad from "react-lazy-load"
import TriplePostCards from "../components/sections/TriplePostCards"
import StayInTouch from "../components/sections/StayInTouch"
import Team from "../components/sections/Team"
import NewsList from "../components/sections/NewsList"
import Block from "../components/objects/Block"

export default function AboutUsPage() {
  return (
    <Layout>
      <Seo title="AboutUs" />
      <TopicPageTitle title="About Us" img="/images/volunteer.jpg" />
      <PageContent>
        <Block
          title="Who We Are"
          text="A major review of Scotland's care system has said the pain of brothers and sisters being seperated has profound and lifelong consequences.
                <br><br>
                Follow us on social media to keep up with the latest news or find out more. We love letting everyone know what our siblings groups have been up to!"
        />

        <Block
          title="What We Do"
          text="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />

        <WideImage></WideImage>

        <Block text="Follow us on social media to keep up with the latest news or find out more. We love letting everyone know what our sibling groups have been up to!" />

        <Block
          introTitle="A message from our Founder & Chair"
          title="Why I created STAR Siblings Reunited"
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                <br><br>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
          image="/images/people/Karen.jpg"
          round={true}
        />

        <Team />

        <NewsList />

        <TriplePostCards title="You may be interested in"></TriplePostCards>
        <StayInTouch />
      </PageContent>
    </Layout>
  )
}

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); filter: blur(10px)}
  to { opacity: 1;  transform: translateY(0px);  filter: blur(0px)}
`

const PageContent = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px;
`

const SubHeading = styled(H3)``

const SubHeadingCenter = styled(H3)`
  text-align: center;

  // animation
  opacity: 0;
  animation: ${slideDown} 1s forwards;
`

const Text = styled(BodyMain)``

const WideImage = styled.img`
  width: 100%;
  height: 300px;
  background: url("/images/hero.jpg");
  background-size: cover;
  background-position: 0% 70%;
  margin: 10px 0px;
`
