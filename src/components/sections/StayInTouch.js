import React from "react"
import styled, { keyframes } from "styled-components"
import SocialMediaButton from "../objects/SocialMediaButton"
import { themes } from "../styles/ColorStyles"
import { BodyMain, H2, H3, MediumText } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import { speed, zoomIn } from "../styles/Animations"

function StayInTouch() {
  const buttonSize = "75px"
  return (
    <Wrapper>
      <ContentWrapper>
        <ImageWrapper>
          <Image src="/images/wellies.png" />
        </ImageWrapper>
        <TextWrapper>
          <Text>
            <Title>Stay in touch</Title>
            <Paragraph>
              Follow us on social media to keep up with the latest news or find
              out more. We love letting everyone know what our sibling groups
              have been up to!
            </Paragraph>
          </Text>
          <ButtonWrapper>
            <SocialMediaButton
              type="/images/icons/face.svg"
              width={buttonSize}
            />
            <SocialMediaButton
              type="/images/icons/twit.svg"
              width={buttonSize}
            />
            <SocialMediaButton
              type="/images/icons/inst.svg"
              width={buttonSize}
            />
          </ButtonWrapper>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default StayInTouch

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  background-color: ${themes.background};
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

  // animations
  opacity: 0;
  animation: ${zoomIn} ${speed} forwards;
`

const ImageWrapper = styled.div`
  max-height: 400px;
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
`

const Text = styled.div`
  display: grid;
  gap: 30px;
`

const Paragraph = styled(BodyMain)``

const Title = styled(H2)``

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;

  // animations
  > * {
    opacity: 0;
    animation: ${zoomIn} ${speed} forwards;

    :nth-child(1) {
      animation-delay: 0.3s;
    }

    :nth-child(2) {
      animation-delay: 0.5s;
    }

    :nth-child(3) {
      animation-delay: 0.7s;
    }
  }
`
