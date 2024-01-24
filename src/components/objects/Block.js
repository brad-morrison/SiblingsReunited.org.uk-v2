import React from "react"
import styled, { keyframes } from "styled-components"
import { BodyMain, H1, H3, H4, MediumText } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import Button from "./Button"
import {
  fadeIn,
  none,
  slideDown,
  slideLeft,
  slideRight,
  slideUp,
  zoomIn,
  zoomOut,
} from "../styles/Animations"

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
            <Title titleAlign={props.titleAlign}>{props.title}</Title>
            <Paragraph>
              {<p dangerouslySetInnerHTML={{ __html: props.text }}></p>}
            </Paragraph>
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

const IntroTitle = styled(H4)`
  text-align: center;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1300px;
  max-height: 400px;
  margin: 30px auto;

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
        1s forwards;
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
        1s forwards;
    }
  }
`

const ImageWrapper = styled.div`
  text-align: center;
  order: ${props => props.flipped};
  overflow: hidden;
`

const Image = styled.img`
  object-fit: cover;
  vertical-align: middle;
  border: 0.5px lightgray solid;
  width: ${props => (props.round ? "400px" : "100%")};
  aspect-ratio: ${props => (props.round ? "1/1" : "16/9")};
  border-radius: ${props => (props.round ? "50%" : "0")};
`

const DetailWrapper = styled.div`
  padding: ${props => (props.image ? "0" : "20px")};
  display: grid;
  align-content: center;
  gap: 40px;
  vertical-align: middle;
`

const Title = styled(H3)`
  text-align: ${props =>
    props.titleAlign === "left"
      ? "start"
      : props.titleAlign === "center"
      ? "center"
      : props.titleAlign === "right"
      ? "end"
      : "left"};
`

const Paragraph = styled(BodyMain)``

const OptionalButton = styled(Button)``
