import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"

function StorePage() {
  return (
    <Layout>
      <Seo title="Store" />
      <TopicPageTitle title="Store" img="/images/birdHouse.jpg" />
    </Layout>
  )
}

export default StorePage
