import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/sections/HeroSection"
import TriplePostSection from "../components/sections/TriplePostSection"
import DetailDescSection from "../components/sections/DetailDescSection"
import ChildIntroSection from "../components/sections/ChildIntroSection"
import FeaturedPostSection from "../components/sections/FeaturedPostSection"
import QuotesSection from "../components/sections/QuotesSection"
import StayInTouchSection from "../components/sections/StayInTouchSection"
import FunderSection from "../components/sections/FunderSection"
import PartnerSection from "../components/sections/PartnerSection"
import styled from "styled-components"
import StoreSection from "../components/sections/StoreSection"
import ChildHero from "../components/childpage/ChildHero"
import Spacer from "../components/layout/Spacer"

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <Content>
        <HeroSection />
        <DetailDescSection
          title="Reunited siblings is what we do"
          text="Siblings Reunited (STAR) reunites Brothers and Sisters separated
                in the care system, through adoption or Kinship care by providing
                the opportunity for quality and regular Sibling contact.
                <br><br>
                Run from its unique farmland setting it provides a safe, fun and
                exhilarating learning environment where children can foster
                emotional bonds and help overcome the trauma associated with being
                separated."
                image="/images/site.jpg"
        />
        <TriplePostSection title="Get Involved" />
        <ChildIntroSection />
        <QuotesSection />
        <FeaturedPostSection  image="/images/news.jpg" 
                              title="Brothers and sisters split up by the care system" 
                              text="A major review of Scotland's care system has said the pain of
                                    brothers and sisters being separated often has profound and
                                    lifelong consequences.
                                    <br><br>
                                    Click below to read the full article."/>
        <TriplePostSection title="Recent Posts" />
        {/* <StoreSection /> */}
        <StayInTouchSection />
        <FunderSection title="Funded by" />
        <PartnerSection title="In Partnership with" />
      </Content>
    </Layout>
  )
}

export default IndexPage

const Content = styled.div`
  display: grid;
  gap: 150px;
`
