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

export default function ContactPage() {
  return (
    <Layout>
      <Seo title="Contact" />
      <TopicPageTitle title="Contact" img="/images/wellies.png" />
      <DetailsWrapper>
        <DetailsTitle>Our Details</DetailsTitle>
        <DetailsSection>
          <MapWrapper>
            <Map />
          </MapWrapper>
          <ContactCards>
            <ContactCard
              icon="home"
              text="East Flisk Farm, Newburgh, Fife, KY146HP"
            />
            <ContactCard icon="mail" text="karen@siblingsreunited.co.uk" />
            <ContactCard icon="phone" text="07398721366" />
            <ContactCard icon="facebook" text="facebook.com/SiblingsReunited" />
          </ContactCards>
        </DetailsSection>
      </DetailsWrapper>
      <TriplePostSection title="You might also be interested in"></TriplePostSection>
      <StayInTouchSection></StayInTouchSection>
    </Layout>
  )
}

const DetailsWrapper = styled.div`
  background-color: ${themes.secondaryBackground};
  width: 100%;
  padding: 40px 20px;
  padding-top: 25px;

  @media (max-width: ${breaks.phone}) {
    padding: 30px 0px;
  }
`

const DetailsSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: auto;
  max-width: 1240px;
  gap: 30px;

  @media (max-width: 900px) {
    grid-template-columns: auto;
  }
`

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.08);

  @media (max-width: ${breaks.phone}) {
    border-radius: 0px;
    border: 0px;
  }
`

const ContactCards = styled.div`
  display: grid;
  align-content: center;
  gap: 30px;

  @media (max-width: ${breaks.phone}) {
    padding: 0px 20px;
  }
`

const DetailsTitle = styled(BodyIntro)`
  text-align: center;
  margin-bottom: 24px;
`
