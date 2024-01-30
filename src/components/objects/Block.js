import React from "react"
import styled, { keyframes } from "styled-components"
import { BodyMain, H1, H2, H3, H4, MediumText } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import Button from "./Button"
import {
  fadeIn,
  none,
  slideDown,
  slideLeft,
  slideRight,
  slideUp,
  speed,
  zoomIn,
  zoomOut,
} from "../styles/Animations"
import { breaks } from "../styles/BreakStyles"

function Block(props) {
  return (
    <LazyLoad height={props.lazyLoadHeight}>
      <Wrapper>
        <IntroTitle>{props.introTitle}</IntroTitle>
        <ContentWrapper animation={props.animation}>
          <ImageWrapper flipped={props.flipped}>
            <Image src={props.image} round={props.round} />
          </ImageWrapper>
          <DetailWrapper>
            <Text>
              <Title titleAlign={props.titleAlign}>{props.title}</Title>
              <Paragraph>
                {<p dangerouslySetInnerHTML={{ __html: props.text }}></p>}
              </Paragraph>
            </Text>
            {props.button && <OptionalButton text={props.button} />}
          </DetailWrapper>
        </ContentWrapper>
      </Wrapper>
    </LazyLoad>
  )
}

export default Block

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  align-items: center;
`

const IntroTitle = styled(H3)`
  text-align: center;

  opacity: 0;
  animation: ${fadeIn} ${speed} forwards;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1300px;
  margin: 30px auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${breaks.phone}) {
  }

  > * {
    opacity: 0;

    :nth-child(1) {
      animation: ${
          props =>
            props.animation === "slideRight"
              ? slideRight
              : props.animation === "slideLeft"
              ? slideLeft
              : props.animation === "slideDown"
              ? slideDown
              : props.animation === "slideUp"
              ? slideUp
              : props.animation === "zoomIn"
              ? zoomIn
              : props.animation === "zoomOut"
              ? zoomOut
              : props.animation === "fadeIn"
              ? fadeIn
              : props.animation === "slideIn"
              ? slideRight
              : props.animation === "slideOut"
              ? slideLeft
              : none /* default animation if none of the conditions match */
        }
        ${speed} forwards;
    }

    :nth-child(2) {
      animation: ${
          props =>
            props.animation === "slideRight"
              ? slideRight
              : props.animation === "slideLeft"
              ? slideLeft
              : props.animation === "slideDown"
              ? slideDown
              : props.animation === "slideUp"
              ? slideUp
              : props.animation === "zoomIn"
              ? zoomIn
              : props.animation === "zoomOut"
              ? zoomOut
              : props.animation === "fadeIn"
              ? fadeIn
              : props.animation === "slideIn"
              ? slideLeft
              : props.animation === "slideOut"
              ? slideRight
              : none /* default animation if none of the conditions match */
        }
        ${speed} forwards;
    }
  }
`

const ImageWrapper = styled.div`
  order: ${props => props.flipped};
  overflow: hidden;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    order: 0;
  }
`

const Image = styled.img`
  object-fit: cover;
  border: 0.5px lightgray solid;
  width: ${props => (props.round ? "400px" : "100%")};
  //width: 100%;
  max-width: 100%;
  aspect-ratio: ${props => (props.round ? "1/1" : "16/9")};
  border-radius: ${props => (props.round ? "50%" : "0")};

  @media (max-width: ${breaks.tablet}) {
    width: ${props => (props.round ? "300px" : "100%")};
  }

  @media (max-width: ${breaks.phone}) {
    width: ${props => (props.round ? "200px" : "100%")};
  }
`

const DetailWrapper = styled.div`
  display: grid;
  height: 100%;
  align-content: space-around;
`

const Text = styled.div`
  max-width: 750px;
`

const Title = styled(H2)`
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: ${props =>
    props.titleAlign === "left"
      ? "start"
      : props.titleAlign === "center"
      ? "center"
      : props.titleAlign === "right"
      ? "end"
      : "left"};
`

const Paragraph = styled(BodyMain)`
  margin-bottom: 2rem;
`

const OptionalButton = styled(Button)`
  margin-top: 1rem;
  margin-bottom: 0;
`
