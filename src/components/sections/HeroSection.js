import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import Button from "../objects/Button"
import SocialMediaBar from "../objects/SocialMediaBar"

function HeroSection() {
  return (
    <Wrapper>
      <HeroImage src="hero.jpg"></HeroImage>
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
          </LeftSection>
          <RightSection></RightSection>
        </ContentWrapper>
      </Content>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 100%;
`

const ContentWrapper = styled.div`
  max-width: 980px;
  display: grid;
  grid-template-columns: 500px auto;

  @media (max-width: 768px) {
  }
`

const HeroImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 100%;
  z-index: -1;
  object-fit: cover;
  bottom: 0;
  top: 0;
`
const Content = styled.div`
  width: 100%;
`

const LeftSection = styled.div`
  display: grid;
  justify-content: start;
  align-content: center;
  padding: 120px 30px;
  gap: 50px;
`

const RightSection = styled.div`
  position: relative;
`

const SocialMediaBarWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 30px;
`

const TextWrapper = styled.div`
  display: grid;
  gap: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
`

const Title = styled(H1)`
  color: black;
`

const Description = styled(MediumText)`
  color: black;
`
