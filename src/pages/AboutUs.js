import * as React from "react"
import styled, { keyframes } from "styled-components"
import Layout from "../components/layout"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import Seo from "../components/seo"
import { BodyMain, H2, H3 } from "../components/styles/TextStyles"
import NewsSection from "../components/sections/NewsSection"
import SiteBlockCircle from "../components/objects/SiteBlockCircle"
import LazyLoad from "react-lazy-load"
import TriplePostCards from "../components/sections/TriplePostCards"
import StayInTouch from "../components/sections/StayInTouch"
import Team from "../components/sections/Team"

export default function AboutUsPage() {
  return (
    <Layout>
      <Seo title="AboutUs" />
      <TopicPageTitle title="About Us" img="/images/volunteer.jpg" />
      <PageContent>
        <LazyLoad>
          <ContentBlock>
            <SubHeading id="who-we-are">Who we are</SubHeading>
            <Text>
              A major review of Scotland's care system has said the pain of
              brothers and sisters being separated often has "profound and
              lifelong consequences."
            </Text>
            <Text>
              Follow us on social media to keep up with the latest news or find
              out more. We love letting everyone know what our sibling groups
              have been up to!
            </Text>
          </ContentBlock>
        </LazyLoad>

        <LazyLoad>
          <ContentBlock>
            <SubHeading id="what-we-do">What we do</SubHeading>
            <Text>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </Text>
            <WideImage></WideImage>
            <Text>
              Follow us on social media to keep up with the latest news or find
              out more. We love letting everyone know what our sibling groups
              have been up to!
            </Text>
          </ContentBlock>
        </LazyLoad>

        <LazyLoad>
          <ContentBlock>
            <SubHeadingCenter>
              A message from our Founder & Owner
            </SubHeadingCenter>
            <SiteBlockCircle
              title="Why I created STAR Siblings Reunited"
              text1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br> <br>  
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
              image="/images/people/Karen.jpg"
            ></SiteBlockCircle>
          </ContentBlock>
        </LazyLoad>

        <Team />

        <ContentBlock>
          <SubHeading id="who-we-are">In the News</SubHeading>
          <NewsSection />
        </ContentBlock>

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
  display: grid;
  grid-template-columns: auto;
  margin: auto;
  gap: 150px; // gap between each block
  padding: 40px;
`
const ContentBlock = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 40px; // gap between elements in each block

  // animation
  opacity: 0;
  animation: ${slideDown} 1s forwards;
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
