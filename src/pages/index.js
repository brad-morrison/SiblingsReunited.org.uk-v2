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

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <HeroSection />
      <DetailDescSection />
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
