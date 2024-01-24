import React from "react"
import styled, { keyframes } from "styled-components"
import { BodyMain, H1, H3, H4, MediumText } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import Button from "./Button"
import {
  none,
  slideDown,
  slideLeft,
  slideRight,
  slideUp,
  zoomIn,
  zoomOut,
  fadeIn,
} from "../styles/Animations"

function BlockText(props) {
  return (
    <LazyLoad>
      <Wrapper>
        <IntroTitle>{props.introTitle}</IntroTitle>
        <ContentWrapper>
          <DetailWrapper animation={props.animation}>
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

export default BlockText

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
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 1300px;
  margin: 0 auto;
`

const DetailWrapper = styled.div`
  padding: 0;
  display: grid;
  gap: 60px;

  // animation
  opacity: 0;
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
          : none /* default animation if none of the conditions match */
    }
    1s forwards;
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
