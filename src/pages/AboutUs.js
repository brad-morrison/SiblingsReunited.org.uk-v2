import * as React from "react"
import Layout from "../components/layout"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import Seo from "../components/seo"

function AboutUsPage() {
  return (
    <Layout>
      <Seo title="AboutUs" />
      <TopicPageTitle title="About Us" img="/images/volunteer.jpg" />
    </Layout>
  )
}

export default AboutUsPage
