import * as React from "react"
import Layout from "../components/layout"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import Seo from "../components/seo"
import styled from "styled-components"
import StayInTouchSection from "../components/sections/StayInTouchSection"
import FormSection from "../components/sections/FormSection"
import ContactDetailsSection from "../components/sections/ContactDetailsSection"
import TriplePostCards from "../components/sections/TriplePostCards"

export default function ContactPage() {
  return (
    <Layout>
      <Seo title="Contact" />
      <TopicPageTitle title="Contact" img="/images/wellies.png" />
      <ContentWrapper>
        <ContactDetailsSection />

        <FormSection></FormSection>

        <TriplePostCards title="You might also be interested in"></TriplePostCards>

        <StayInTouchSection></StayInTouchSection>
      </ContentWrapper>
    </Layout>
  )
}

const ContentWrapper = styled.div`
  display: grid;
  gap: 120px;
`
