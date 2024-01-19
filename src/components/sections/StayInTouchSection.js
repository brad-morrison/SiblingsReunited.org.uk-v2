import { stripLineComment } from "babel-plugin-styled-components/lib/minify"
import React from "react"
import styled, { keyframes } from "styled-components"
import Button from "../objects/Button"
import PostCard from "../objects/PostCard"
import SocialMediaButton from "../objects/SocialMediaButton"
import { themes } from "../styles/ColorStyles"
import { BodyMain, H3, MediumText } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"

function StayInTouchSection() {
  const buttonSize = "75px"
  return (
    <LazyLoad>
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
    </LazyLoad>
  )
}

export default StayInTouchSection

const zoomIn = keyframes`
  from { opacity: 0; transform: scale(0.8); filter: blur(10px)}
  to { opacity: 1;  transform: scale(1);  filter: blur(0px)}
`

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
  animation: ${zoomIn} 1s forwards;
`

const ImageWrapper = styled.div`
  max-height: 400px;
  padding: 30px;
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

const Title = styled(H3)``

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;

  // animations
  > * {
    opacity: 0;
    animation: ${zoomIn} 1s forwards;

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
