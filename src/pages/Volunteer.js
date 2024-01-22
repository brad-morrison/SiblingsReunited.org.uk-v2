import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import DetailDescSection from "../components/sections/DetailDescSection"
import styled from "styled-components"
import { BodyMain, H3 } from "../components/styles/TextStyles"
import { teamMembers } from "../data/TeamMembers"
import TeamMemberCard from "../components/objects/TeamMemberCard"
import { breaks } from "../components/styles/BreakStyles"
import OurRolesSection from "../components/sections/OurRolesSection"
import Quotes from "../components/sections/Quotes"

export default function VolunteerPage() {
  return (
    <Layout>
      <Seo title="Volunteer" />
      <TopicPageTitle title="Volunteer" img="/images/teacher.jpg" />
      <ContentWrapper>
        <DetailDescSection
          id="help-us"
          title="Come and join our amazing team!"
          text="On a Tuesday and we keep this day free for the upkeep, maintenance, help with the animals, 
              garden section and for the development of new projects. <br><br>The bell rings at 12.30 for soup and 
              cake and we all gather around the kitchen table and have a good chat and catch up. 
              <br><br> Find out more below."
        />

        <OurRolesSection />

        <Block>
          <SubHeading id="the-team">Meet our volunteers</SubHeading>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Text>
          <Team>
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                firstName={member.firstName}
                lastName={member.lastName}
                role={member.role}
                image={member.image}
              ></TeamMemberCard>
            ))}
          </Team>
        </Block>
        <Quotes title={"What our Volunteers"} />
        <Quotes hideTitle="true" />
      </ContentWrapper>
    </Layout>
  )
}

const ContentWrapper = styled.div`
  display: grid;
  gap: 120px;
`

const SubHeading = styled(H3)`
  text-align: center;
`

const CarouselWrapper = styled.div`
  width: 800px;
  height: 400px;
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
