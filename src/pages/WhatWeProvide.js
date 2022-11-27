import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"

export default function WhatWeProvidePage() {
  return (
    <Layout>
      <Seo title="WhatWeProvide" />
      <TopicPageTitle title="What We Provide" img="/images/birdHouse.jpg" />
    </Layout>
  )
}
