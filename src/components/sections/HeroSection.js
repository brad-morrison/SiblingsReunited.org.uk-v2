import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import Button from "../objects/Button"
import SocialMediaBar from "../objects/SocialMediaBar"

function HeroSection() {
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
  background: url("/hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 500px auto;
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
