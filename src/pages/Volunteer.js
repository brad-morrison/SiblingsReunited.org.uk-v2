import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"

function VolunteerPage() {
  return (
    <Layout>
      <Seo title="Volunteer" />
      <TopicPageTitle title="Volunteer" img="/images/teacher.jpg" />
    </Layout>
  )
}

export default VolunteerPage
