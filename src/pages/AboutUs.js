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
import { fadeIn, speed, zoomIn } from "../components/styles/Animations"
import Spacer from "../components/layout/Spacer"
import BlockText from "../components/objects/BlockText"

export default function AboutUsPage() {
  return (
    <Layout>
      <Seo title="AboutUs" />
      <TopicPageTitle title="About Us" img="/images/volunteer.jpg" />
      <PageContent>
        <BlockText
          animation="slideDown"
          title="Who We Are"
          text="A major review of Scotland's care system has said the pain of brothers and sisters being seperated has profound and lifelong consequences. A major review of Scotland's care system has said the pain of brothers and sisters being seperated has profound and lifelong consequences.
                <br><br>
                Follow us on social media to keep up with the latest news or find out more. We love letting everyone know what our siblings groups have been up to!"
        />

        <div>
          <BlockText
            animation="slideDown"
            title="What We Do"
            text="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <Spacer size="sm" />
          <WideImage></WideImage>
          <BlockText
            animation="slideDown"
            text="Follow us on social media to keep up with the latest news or find out more. We love letting everyone know what our sibling groups have been up to!"
          />
        </div>

        <Block
          animation="slideIn"
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
        <TriplePostCards title={"You may be interested in"}></TriplePostCards>
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
  max-width: 1400px;
  margin: 80px auto;

  padding: 0 30px;
  display: grid;
  gap: 160px;
`

const WideImage = styled.img`
  width: 100%;
  height: 300px;
  background: url("/images/hero.jpg");
  background-size: cover;
  background-position: 0% 70%;
  margin: 10px 0px;

  opacity: 0;
  animation: ${fadeIn} ${speed} forwards;
`
