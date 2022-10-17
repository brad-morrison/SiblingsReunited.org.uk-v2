import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import HeroSection from "../components/sections/HeroSection"
import StoreCarousel from "../components/sections/StoreCarousel"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <StoreCarousel />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
