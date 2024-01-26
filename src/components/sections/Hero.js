import React from "react"
import styled, { keyframes } from "styled-components"
import { BodyIntro, H1 } from "../styles/TextStyles"
import Button from "../objects/Button"
import SocialMediaBar from "../objects/SocialMediaBar"
import { themes } from "../styles/ColorStyles"
import {
  blurIn,
  fadeIn,
  slideDown,
  slideRight,
  speed,
} from "../styles/Animations"
import { breaks } from "../styles/BreakStyles"

function Hero() {
  return (
    <Wrapper>
      <Content>
        <SocialMediaBarWrapper>
          <SocialMediaBar id="hideOnMobile" />
        </SocialMediaBarWrapper>
        <ContentWrapper>
          <LeftSection>
            <TextWrapper>
              <Title>Reuniting care experienced siblings</Title>
              <Description>
                Providing a safe and stimulating environment for siblings to
                grow life long bonds.
              </Description>
            </TextWrapper>
            <Button text="find out more"></Button>
          </LeftSection>
          <RightSection></RightSection>
        </ContentWrapper>
      </Content>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  position: relative;
  background: url("/images/sib.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 100%;

  animation: ${slideDown} ${speed} forwards;

  z-index: 10;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 600px auto;
  width: 100%;
  min-width: 100%;

  @media (max-width: ${breaks.phone}) {
    grid-template-columns: auto;
  }
`

const Content = styled.div`
  position: relative;
  display: grid;
  max-width: 1500px;
  margin: auto;
`

const LeftSection = styled.div`
  display: grid;
  justify-content: start;
  align-content: center;
  padding: 120px 30px;
  gap: 50px;

  // button animation
  > * {
    :nth-child(2) {
      opacity: 0;
      animation: ${slideDown} ${speed} 0.7s forwards;
      padding: 0px 0px;
    }
  }

  @media (max-width: ${breaks.phone}) {
    padding: 30px 30px;
    gap: 20px;
  }
`

const RightSection = styled.div`
  position: relative;
`

const SocialMediaBarWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 30px;
  z-index: 5;

  // animation
  opacity: 0;
  animation: ${slideRight} ${speed} 0.8s forwards;

  @media (max-width: ${breaks.phone}) {
    visibility: hidden;
  }

  #hideInMobile {
    visibility: hidden;
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 20px;
  background-color: ${themes.background};
  padding: 40px;
  border-radius: 15px;
  border: 0.5px lightgray solid;

  // animation
  opacity: 0;
  animation: ${slideDown} ${speed} forwards;

  // children animation
  > * {
    opacity: 0;
    animation: ${slideDown} ${speed} forwards;

    :nth-child(1) {
      animation-delay: 0.3s;
    }

    :nth-child(2) {
      animation-delay: 0.5s;
    }
  }

  @media (max-width: ${breaks.phone}) {
    padding: 20px;
    margin-right: 100px;
  }
`

/*
const SVGImage = styled.img`
position: absolute;
  width: 450px;
  height: 450px;
  left: 420px;
  bottom: 70px;

  // animation
  opacity: 0;
  animation: ${slideInRight} 1s 1s forwards;
`
*/

const Title = styled(H1)`
  color: ${themes.text1};

  @media (max-width: ${breaks.phone}) {
    font-size: xx-large;
  }
`

const Description = styled(BodyIntro)`
  @media (max-width: ${breaks.phone}) {
    font-size: large;
  }
`
