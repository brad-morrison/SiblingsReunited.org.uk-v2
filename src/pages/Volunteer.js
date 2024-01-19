import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import DetailDescSection from "../components/sections/DetailDescSection"
import Carousel from "../components/objects/Carousel"
import styled from "styled-components"
import { BodyMain, H3 } from "../components/styles/TextStyles"
import SiteBlockCircle from "../components/objects/SiteBlockCircle"
import Button from "../components/objects/Button"
import QuotesSection from "../components/sections/QuotesSection"
import { teamMembers } from "../data/TeamMembers"
import TeamCard from "../components/objects/TeamCard"
import { breaks } from "../components/styles/BreakStyles"

export default function VolunteerPage() {
  return (
    <Layout>
      <Seo title="Volunteer" />
      <TopicPageTitle title="Volunteer" img="/images/teacher.jpg" />
      <DetailDescSection
        title="Come and join our amazing team!"
        text1="On a Tuesday and we keep this day free for the upkeep, maintenance, help with the animals, garden section and for the development of new projects. The bell rings at 12.30 for soup and cake and we all gather around the kitchen table and have a good chat and catch up."
        text2="Please get in touch if you would like to receive information on our process to becoming a volunteer supervisor at star, even if you can just spare 2 hours a month you could be helping supervise one family."
      />

      <SubHeading id="roles">Our Roles</SubHeading>
      <SiteBlockCircle
        title="Contact Supervisor"
        text1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br><br>
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      ></SiteBlockCircle>
      <SiteBlockCircle
        flipped="1"
        title="General Volunteer"
        text1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br><br>
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      ></SiteBlockCircle>
      <SiteBlockCircle
        title="Contact Supervisor"
        text1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br><br>
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      ></SiteBlockCircle>

      <ButtonWrapper>
        <Button text="Enquire now"></Button>
      </ButtonWrapper>

      <SubHeading>What our Volunteers say...</SubHeading>
      <QuotesSection hideTitle="true"></QuotesSection>
      <QuotesSection hideTitle="true"></QuotesSection>

      <Block>
        <SubHeading id="the-team">Meet our volunteers</SubHeading>
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
    </Layout>
  )
}

const SubHeading = styled(H3)`
  text-align: center;
`

const CarouselWrapper = styled.div`
  width: 800px;
  height: 400px;
`

const ButtonWrapper = styled.div`
  text-align: center;
  margin: auto;
  display: grid;
  justify-content: center;
  margin: 80px;
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

const Text = styled(BodyMain)``

const Block = styled.div`
  max-width: 1200px;
  display: grid;
  gap: 40px;
  justify-content: center;
  margin: auto;
  padding: 30px;
`
