import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import DetailDescSection from "../components/sections/DetailDescSection"
import styled from "styled-components"
import { BodyMain, H3 } from "../components/styles/TextStyles"
import Quotes from "../components/sections/Quotes"
import Team from "../components/sections/Team"
import OurRoles from "../components/sections/OurRoles"

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

        <OurRoles />

        <Quotes title={"What our Volunteers"} />
        <Quotes hideTitle="true" />

        <Team />
      </ContentWrapper>
    </Layout>
  )
}

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 120px;
`
const Text = styled(BodyMain)``
