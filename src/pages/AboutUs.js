import * as React from "react"
import styled, { keyframes } from "styled-components"
import Layout from "../components/layout"
import TeamCard from "../components/objects/TeamCard"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import Seo from "../components/seo"
import { breaks } from "../components/styles/BreakStyles"
import { BodyMain, H2, H3 } from "../components/styles/TextStyles"
import { teamMembers } from "../data/TeamMembers"
import TriplePostSection from "../components/sections/TriplePostSection"
import StayInTouchSection from "../components/sections/StayInTouchSection"
import DetailDescSection from "../components/sections/DetailDescSection"
import NewsSection from "../components/sections/NewsSection"
import FeaturedPostSection from "../components/sections/FeaturedPostSection"
import SiteBlockCircle from "../components/objects/SiteBlockCircle"
import LazyLoad from "react-lazy-load"

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

        <ContentBlock>
          <SubHeading id="meet-the-team">
            Meet the Siblings Reunited team
          </SubHeading>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Text>
          <Team>
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                firstName={member.firstName}
                lastName={member.lastName}
                role={member.role}
                image={member.image}
              ></TeamCard>
            ))}
          </Team>
        </ContentBlock>

        <ContentBlock>
          <SubHeading id="who-we-are">In the News</SubHeading>
          <NewsSection />
        </ContentBlock>

        <TriplePostSection title="You may be interested in"></TriplePostSection>
        <StayInTouchSection></StayInTouchSection>
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

const Team = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-evenly;
  gap: 40px;
  grid-template-columns: auto auto auto auto;
  //margin: 50px 0px;

  @media (max-width: ${breaks.tablet}) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 770px) {
    grid-template-columns: auto auto;
  }
`
