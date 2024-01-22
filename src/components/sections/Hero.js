import React from "react"
import styled, { keyframes } from "styled-components"
import { BodyIntro, H1 } from "../styles/TextStyles"
import Button from "../objects/Button"
import SocialMediaBar from "../objects/SocialMediaBar"
import { themes } from "../styles/ColorStyles"

function Hero() {
  return (
    <Wrapper>
      <Content>
        <SocialMediaBarWrapper>
          <SocialMediaBar />
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
            {/*<SVGImage src="/images/svg/kids.svg"></SVGImage>*/}
          </LeftSection>
          <RightSection></RightSection>
        </ContentWrapper>
      </Content>
    </Wrapper>
  )
}

export default Hero

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(50px); filter: blur(10px)}
  to { opacity: 1;  transform: translateX(0px);  filter: blur(0px)}
`

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); filter: blur(10px)}
  to { opacity: 1;  transform: translateY(0px);  filter: blur(0px)}
`

const BackgroundImage = keyframes`
  from { transform: translateX(-10px); filter: blur(10px)}
  to { transform: translateX(0px);  filter: blur(0px)}
`

const Wrapper = styled.div`
  position: relative;
  background: url("/images/sib.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  max-height: fit-content;

  animation: ${BackgroundImage} 1s forwards;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 600px auto;

  @media (max-width: 688px) {
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
      animation: ${slideDown} 1s 0.7s forwards;
    }
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
  animation: ${slideInRight} 1s 0.8s forwards;
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
  animation: ${slideDown} 1.5s forwards;

  // children animation
  > * {
    opacity: 0;
    animation: ${slideDown} 1s forwards;

    :nth-child(1) {
      animation-delay: 0.3s;
    }

    :nth-child(2) {
      animation-delay: 0.5s;
    }
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
`

const Description = styled(BodyIntro)``
