import * as React from "react"
import styled from "styled-components"
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

export default function AboutUsPage() {
  return (
    <Layout>
      <Seo title="AboutUs" />
      <TopicPageTitle title="About Us" img="/images/volunteer.jpg" />
      <Block>
        <SubHeading>Who we are</SubHeading>
        <Text>
          A major review of Scotland's care system has said the pain of brothers
          and sisters being separated often has "profound and lifelong
          consequences."
        </Text>
        <Text>
          Follow us on social media to keep up with the latest news or find out
          more. We love letting everyone know what our sibling groups have been
          up to!
        </Text>
      </Block>
      <Block>
        <SubHeading>What we do</SubHeading>
        <Text>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Text>
        <WideImage></WideImage>
        <Text>
          Follow us on social media to keep up with the latest news or find out
          more. We love letting everyone know what our sibling groups have been
          up to!
        </Text>
      </Block>
      <Block>
        <SubHeading>A message from our Founder & Owner</SubHeading>
        <DetailDescSection
          title="Why I created STAR Siblings Reunited"
          text1="I created Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s."
          text2="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s."
        ></DetailDescSection>
      </Block>
      <Block>
        <SubHeading>Meet the Siblings Reunited team</SubHeading>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
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
      </Block>
      <TriplePostSection title="You may be interested in"></TriplePostSection>
      <StayInTouchSection></StayInTouchSection>
    </Layout>
  )
}

const Block = styled.div`
  max-width: 1200px;
  display: grid;
  gap: 40px;
  justify-content: center;
  margin: auto;
  padding: 30px;
`

const SubHeading = styled(H3)``

const Text = styled(BodyMain)``

const WideImage = styled.img`
  width: 100%;
  height: 300px;
  background: url("/images/hero2.jpeg");
  background-size: cover;
  background-position: 0% 70%;
  margin: 10px 0px;
`

const Team = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-evenly;
  gap: 30px;
  grid-template-columns: auto auto auto auto;
  margin: 50px 0px;

  @media (max-width: ${breaks.tablet}) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 770px) {
    grid-template-columns: auto auto;
  }
`
