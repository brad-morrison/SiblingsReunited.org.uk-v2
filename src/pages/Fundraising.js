import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import DetailDescSection from "../components/sections/DetailDescSection"
import styled from "styled-components"
import FundraiserSection from "../components/sections/FundraiserSection"
import FundraisePackSection from "../components/sections/FundraisePackSection"
import TriplePostCards from "../components/sections/TriplePostCards"

function FundraisingPage() {
  return (
    <Layout>
      <Seo title="Fundraising" />
      <TopicPageTitle title="Fundraise" img="/images/kids.jpeg" />

      <DetailDescSection
        id="help-us"
        title="Make a real difference by fundraising for Siblings Reunited"
        text="On a Tuesday and we keep this day free for the upkeep, maintenance, help with the animals, 
              garden section and for the development of new projects. The bell rings at 12.30 for soup and 
              cake and we all gather around the kitchen table and have a good chat and catch up. 
              <br><br> Find out more below."
      />

      <FundraisePackSection />

      {/* <SubHeading>Or use our individual downloads</SubHeading> */}

      <TriplePostCards title="Or use our individual downloads" />

      <FundraiserSection />
    </Layout>
  )
}

export default FundraisingPage

const TripleWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`
