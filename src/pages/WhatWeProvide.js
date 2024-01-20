import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import DetailDescSection from "../components/sections/DetailDescSection"
import { BodyMain, H3 } from "../components/styles/TextStyles"
import styled from "styled-components"
import SiteBlock from "../components/objects/SiteBlock"
import QuotesSection from "../components/sections/QuotesSection"
import AnimalCard from "../components/objects/AnimalCard"
import { animals } from "../data/Animals"
import SupervisorCard from "../components/objects/SupervisorCard"
import { func } from "prop-types"
import OurSiteSection from "../components/sections/OurSiteSection"
import Spacer from "../components/layout/Spacer"
import LazyLoad from "react-lazy-load"
import AnimalSection from "../components/sections/AnimalSection"
import SupervisorSection from "../components/sections/SupervisorSection"
import SeasonalEventsSection from "../components/sections/SeasonalEventsSection"

function WhatWeProvidePage() {
  return (
    <Layout>
      <Seo title="WhatWeProvide" />
      <ContentWrapper>

      <TopicPageTitle title="What We Provide" img="/images/birdHouse.jpg" />

      <DetailDescSection
        flipped="1"
        title="What makes us special?"
        text="Run from its unique farmland setting it provides a safe, fun and exhilarating learning environment where children. <br><br> 
              Run from its unique farmland setting it provides a safe, fun and exhilarating learning environment where children."
      ></DetailDescSection>

      <OurSiteSection />

      <QuotesSection title={"What the children say"}></QuotesSection>
      <QuotesSection></QuotesSection>
      
      <AnimalSection />

      <SupervisorSection />

      <SeasonalEventsSection />

    
      </ContentWrapper>
    </Layout>
  )
}

export default WhatWeProvidePage

const ContentWrapper = styled.div`
  display: grid;
  gap: 80px;
`

const SubHeading = styled(H3)`
  text-align: center;
`

const TextBlock = styled.div`
  margin: auto;
  max-width: 1080px; // ?
  padding: 0px 20px;
  margin: 40px auto;
`

const Text = styled(BodyMain)`
  text-align: left;
`




