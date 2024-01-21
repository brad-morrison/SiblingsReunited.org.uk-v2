import * as React from "react"
import Layout from "../components/layout"
import Map from "../components/sections/Map"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import Seo from "../components/seo"
import styled from "styled-components"
import ContactCard from "../components/objects/ContactCard"
import { themes } from "../components/styles/ColorStyles"
import { breaks } from "../components/styles/BreakStyles"
import TriplePostSection from "../components/sections/TriplePostSection"
import StayInTouchSection from "../components/sections/StayInTouchSection"
import { BodyIntro, H4 } from "../components/styles/TextStyles"
import FormSection from "../components/sections/FormSection"
import ContactDetailsSection from "../components/sections/ContactDetailsSection"

export default function ContactPage() {
  return (
    <Layout>
      <Seo title="Contact" />
      <TopicPageTitle title="Contact" img="/images/wellies.png" />
      <ContentWrapper>
        <ContactDetailsSection />

        <FormSection></FormSection>

        <TriplePostSection title="You might also be interested in"></TriplePostSection>

        <StayInTouchSection></StayInTouchSection>
      </ContentWrapper>
    </Layout>
  )
}

const ContentWrapper = styled.div`
  display: grid;
  gap: 120px;
`
