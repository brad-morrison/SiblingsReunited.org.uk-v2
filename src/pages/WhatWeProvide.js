import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import DetailDescSection from "../components/sections/DetailDescSection"
import { BodyMain, H3 } from "../components/styles/TextStyles"
import styled from "styled-components"
import OurSiteSection from "../components/sections/OurSiteSection"
import SupervisorSection from "../components/sections/SupervisorSection"
import SeasonalEventsSection from "../components/sections/SeasonalEventsSection"
import Quotes from "../components/sections/Quotes"
import Animals from "../components/sections/Animals"

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

        <Quotes title={"What the children say"} />
        <Quotes />

        <Animals />

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
