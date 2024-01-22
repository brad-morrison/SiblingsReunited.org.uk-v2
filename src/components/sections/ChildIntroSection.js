import { stripLineComment } from "babel-plugin-styled-components/lib/minify"
import React from "react"
import styled, { keyframes } from "styled-components"
import Button from "../objects/Button"
import PostCard from "../objects/PostCard"
import LazyLoad from "react-lazy-load"
import {
  BodyIntro,
  BodyMain,
  H1,
  H2,
  H3,
  H4,
  MediumText,
} from "../styles/TextStyles"

function ChildIntroSection() {
  return (
    <LazyLoad>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Text>
              <Title>Are you a child coming to STAR Siblings Reunited?</Title>
              <Paragraph>
                We can’t wait to welcome you and your siblings! Click below to
                open our child page and see what fun activities you can do
                together.
              </Paragraph>
            </Text>
            <ButtonWrapper>
              <Button text="What can I do at STAR?" />
            </ButtonWrapper>
          </TextWrapper>
          <ImageWrapper>
            <Image src="/images/kids.jpeg" />
          </ImageWrapper>
        </ContentWrapper>
      </Wrapper>
    </LazyLoad>
  )
}

export default ChildIntroSection

// animations
const slideLeft = keyframes`
  from { opacity: 0; transform: translateX(-20px); filter: blur(10px)}
  to { opacity: 1;  transform: translateX(0px);  filter: blur(0px)}
  `

const slideRight = keyframes`
  from { opacity: 0;  transform: translateX(50px); filter: blur(10px); }
  to { opacity: 1;   transform: translateX(0px);  filter: blur(0px)}
`

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1300px;
  margin: 0 auto;

  // mid
  @media (max-width: 1034px) {
    grid-template-columns: auto;
  }
`

const ImageWrapper = styled.div`
  max-height: 400px;
  padding: 30px;

  // animations
  opacity: 0;
  animation: ${slideRight} 1s 0.2s forwards;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
  border: 0.5px lightgray solid;
`

const TextWrapper = styled.div`
  padding: 30px;
  display: grid;
  gap: 30px;
  align-items: center;

  // animations
  opacity: 0;
  animation: ${slideLeft} 1s 0.2s forwards;
`

const Text = styled.div`
  display: grid;
  gap: 30px;
`

const Paragraph = styled(BodyMain)``

const Title = styled(H3)``

const ButtonWrapper = styled.div``
