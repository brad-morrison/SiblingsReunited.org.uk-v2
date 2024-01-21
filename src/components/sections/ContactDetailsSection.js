import React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import Map from "./Map"
import ContactCard from "../objects/ContactCard"
import { BodyIntro } from "../styles/TextStyles"
import { breaks } from "../styles/BreakStyles"

export default function ContactDetailsSection() {
  return (
    <Wrapper>
      <DetailsTitle>Our Details</DetailsTitle>
      <ContentWrapper>
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
      </ContentWrapper>
    </Wrapper>
  )
}

// animations
const slideLeft = keyframes`
  from { opacity: 0; transform: translateX(-20px); filter: blur(10px)}
  to { opacity: 1;  transform: translateX(0px);  filter: blur(0px)}
`

const slideRight = keyframes`
  from { opacity: 0;  transform: translateX(50px); filter: blur(10px); }
  to { opacity: 1;   transform: translateX(0px);  filter: blur(0px)}
`

const zoomIn = keyframes`
  from { opacity: 0; transform: scale(0.8); filter: blur(10px)}
  to { opacity: 1;  transform: scale(1);  filter: blur(0px)}
`

const Wrapper = styled.div``

const ContentWrapper = styled.div`
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

  // animations
  opacity: 0;
  animation: ${zoomIn} 1s forwards;
`

const ContactCards = styled.div`
  display: grid;
  align-content: center;
  gap: 30px;

  @media (max-width: ${breaks.phone}) {
    padding: 0px 20px;
  }

  // animations
  > * {
    opacity: 0;
    animation: ${slideRight} 1s forwards;

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

const DetailsTitle = styled(BodyIntro)`
  text-align: center;
  margin-bottom: 24px;
`
