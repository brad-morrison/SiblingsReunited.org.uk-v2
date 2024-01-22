import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ChildIntroSection from "../components/sections/ChildIntroSection"
import FeaturedPostSection from "../components/sections/FeaturedPostSection"
import FunderSection from "../components/sections/FunderSection"
import PartnerSection from "../components/sections/PartnerSection"
import styled from "styled-components"
import Hero from "../components/sections/Hero"
import SubHero from "../components/sections/SubHero"
import TriplePostCards from "../components/sections/TriplePostCards"
import Quotes from "../components/sections/Quotes"
import StayInTouch from "../components/sections/StayInTouch"

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <Content>
        <Hero />
        <SubHero
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
        <TriplePostCards title="Get Involved" />
        <ChildIntroSection />
        <Quotes />
        <FeaturedPostSection
          image="/images/news.jpg"
          title="Brothers and sisters split up by the care system"
          text="A major review of Scotland's care system has said the pain of
                                    brothers and sisters being separated often has profound and
                                    lifelong consequences.
                                    <br><br>
                                    Click below to read the full article."
        />
        <TriplePostCards title="Recent Posts" />
        {/* <StoreSection /> */}
        <StayInTouch />
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
