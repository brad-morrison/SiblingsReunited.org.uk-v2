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
import StoreSection from "../components/sections/StoreSection"
import ChildHero from "../components/childpage/ChildHero"

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <HeroSection />
      <DetailDescSection
        title="Reunited siblings is what we do"
        text1="Siblings Reunited (STAR) reunites Brothers and Sisters separated
              in the care system, through adoption or Kinship care by providing
              the opportunity for quality and regular Sibling contact."
        text2="Run from its unique farmland setting it provides a safe, fun and
              exhilarating learning environment where children can foster
              emotional bonds and help overcome the trauma associated with being
              separated."
      />
      <TriplePostSection title="Get Involved" />
      <ChildIntroSection />
      <QuotesSection />
      <FeaturedPostSection />
      <TriplePostSection title="Recent Posts" />
      <StoreSection />
      <StayInTouchSection />
      <FunderSection title="Funded by" />
      <PartnerSection title="In Partnership with" />
    </Layout>
  )
}

export default IndexPage
