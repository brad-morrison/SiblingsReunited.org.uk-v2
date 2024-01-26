import React from "react"
import styled, { keyframes } from "styled-components"
import { BodyMain, H1, H2, H3, H4, MediumText } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import { slideDown, slideLeft, slideRight, speed } from "../styles/Animations"
import { breaks } from "../styles/BreakStyles"

function SubHero(props) {
  return (
    <Wrapper>
      <LazyLoad>
        <ContentWrapper>
          <ImageWrapper flipped={props.flipped}>
            <SVGImage src="/images/logos/Mascot.svg"></SVGImage>
            <SVGImage2 src="/images/svg/kids.svg"></SVGImage2>
          </ImageWrapper>
          <TextWrapper>
            <Text>
              <Title>{props.title}</Title>
              <Paragraph>
                {<p dangerouslySetInnerHTML={{ __html: props.text }}></p>}
              </Paragraph>
            </Text>
          </TextWrapper>
        </ContentWrapper>
      </LazyLoad>
    </Wrapper>
  )
}

export default SubHero

// animations
const slideLeftRotate = keyframes`
  from { opacity: 0; transform: translateX(-80px) rotate(-30deg); filter: blur(20px)}
  to { opacity: 1;  transform: translateX(0px) rotate(0deg);  filter: blur(0px)}
`

const Wrapper = styled.div`
  position: relative;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: ${breaks.phone}) {
    width: 100%;
    grid-template-columns: 1fr;
    position: relative;
  }
`

const ImageWrapper = styled.div`
  max-height: 400px;
  padding: 30px;
  position: relative;
  width: 100%;
  height: 100vh; /* You can adjust the height as needed */

  @media (max-width: ${breaks.phone}) {
    width: 100%;
    height: 300px;
    grid-template-columns: 1fr;
    order: 2;
  }
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
  align-items: center;

  opacity: 0;
  animation: ${slideDown} ${speed} 0.2s forwards;
`

const Text = styled.div`
  display: grid;
  gap: 30px;
`

const Paragraph = styled(BodyMain)`
  @media (max-width: ${breaks.phone}) {
    font-size: large;
  }
`

const Title = styled(H2)`
  @media (max-width: ${breaks.phone}) {
    font-size: x-large;
  }
`

const SVGImage = styled.img`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;

  // animation
  opacity: 0;
  animation: ${slideLeftRotate} ${speed} 0.2s forwards;

  @media (max-width: ${breaks.phone}) {
    height: 160px;
    left: -10px;
  }
`

const SVGImage2 = styled.img`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;

  // animation
  opacity: 0;
  animation: ${slideRight} ${speed} 0.2s forwards;

  @media (max-width: ${breaks.phone}) {
    height: 180px;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
  }
`
