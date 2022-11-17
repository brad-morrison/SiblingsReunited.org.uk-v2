import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"

function FundraisingPage() {
  return (
    <Layout>
      <Seo title="Fundraising" />
      <TopicPageTitle title="Fundraise" img="/images/kids.jpeg" />
    </Layout>
  )
}

export default FundraisingPage
