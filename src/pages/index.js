import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import HeroSection from "../components/sections/HeroSection"
import StoreCarousel from "../components/sections/StoreCarousel"
import NavBar from "../components/layout/NavBar"
import PostCard from "../components/objects/PostCard"
import TriplePostSection from "../components/sections/TriplePostSection"
import DetailDescSection from "../components/sections/DetailDescSection"
import ChildIntroSection from "../components/sections/ChildIntroSection"
import FeaturedPostSection from "../components/sections/FeaturedPostSection"
import QuoteCard from "../components/objects/QuoteCard"
import QuotesSection from "../components/sections/QuotesSection"
import StayInTouchSection from "../components/sections/StayInTouchSection"
import FunderSection from "../components/sections/FunderSection"
import PartnerSection from "../components/sections/PartnerSection"
import Footer from "../components/layout/Footer"
import StoreSection from "../components/sections/StoreSection"

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <NavBar />
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
      <Footer></Footer>
    </Layout>
  )
}

export default IndexPage
