import React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import Map from "../objects/Map"
import { BodyIntro, H3, H4 } from "../styles/TextStyles"
import { breaks } from "../styles/BreakStyles"
import ContactDetailCard from "../objects/ContactDetailCard"
import Block from "../objects/Block"
import BlockText from "../objects/BlockText"
import { fadeIn, slideRight, speed, zoomIn } from "../styles/Animations"

export default function ContactDetails() {
  return (
    <Wrapper>
      <Title>Our Details</Title>
      <ContentWrapper>
        <DetailsSection>
          <MapWrapper>
            <Map />
          </MapWrapper>
          <ContactCards>
            <ContactDetailCard
              icon="home"
              text="East Flisk Farm, Newburgh, Fife, KY146HP"
            />
            <ContactDetailCard
              icon="mail"
              text="karen@siblingsreunited.co.uk"
            />
            <ContactDetailCard icon="phone" text="07398721366" />
            <ContactDetailCard
              icon="facebook"
              text="facebook.com/SiblingsReunited"
            />
          </ContactCards>
        </DetailsSection>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 25px;
`

const ContentWrapper = styled.div`
  background-color: ${themes.secondaryBackground};
  width: 100%;
  padding: 40px 20px;
  padding-top: 30px;

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
const Title = styled(H4)`
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} ${speed} forwards;
  margin-top: 20px;
  margin-bottom: 15px;
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

  // animations
  opacity: 0;
  animation: ${zoomIn} ${speed} forwards;
`

const ContactCards = styled.div`
  display: grid;
  align-content: center;
  gap: 30px;

  @media (max-width: ${breaks.phone}) {
    gap: 15px;
  }

  // animations
  > * {
    opacity: 0;
    animation: ${slideRight} ${speed} forwards;

    :nth-child(1) {
      animation-delay: 0.2s;
    }

    :nth-child(2) {
      animation-delay: 0.4s;
    }
    :nth-child(3) {
      animation-delay: 0.6s;
    }

    :nth-child(4) {
      animation-delay: 0.8s;
    }
  }
`
