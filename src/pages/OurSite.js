import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"

export default function OurSitePage() {
  return (
    <Layout>
      <Seo title="OurSite" />
      <TopicPageTitle title="Our Site" img="/images/birdHouse.jpg" />
    </Layout>
  )
}
