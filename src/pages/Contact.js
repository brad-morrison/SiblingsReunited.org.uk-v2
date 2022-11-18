import * as React from "react"
import Layout from "../components/layout"
import MapSection from "../components/sections/MapSection"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import Seo from "../components/seo"

function ContactPage() {
  return (
    <Layout>
      <Seo title="Contact" />
      <TopicPageTitle title="Contact" img="/images/wellies.png" />
      <MapSection />
    </Layout>
  )
}

export default ContactPage
