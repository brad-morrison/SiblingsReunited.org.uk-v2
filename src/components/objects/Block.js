import React from "react"
import styled, { keyframes } from "styled-components"
import { BodyMain, H1, H3, H4, MediumText } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import Button from "./Button"
import { slideLeft, slideRight } from "../styles/Animations"

function Block(props) {
  return (
    <LazyLoad>
      <Wrapper>
        <IntroTitle>{props.introTitle}</IntroTitle>
        {/* if image passed in */}
        {props.image ? (
          <ContentWrapperWithImage>
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
          </ContentWrapperWithImage>
        ) : (
          <ContentWrapper>
            <DetailWrapperNoImage>
              <Title titleAlign={props.titleAlign}>{props.title}</Title>
              <Paragraph>
                {<p dangerouslySetInnerHTML={{ __html: props.text }}></p>}
              </Paragraph>
              {props.button && <OptionalButton text={props.button} />}
            </DetailWrapperNoImage>
          </ContentWrapper>
        )}
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 1300px;
  margin: 0 auto;

  opacity: 0;
  animation: ${slideLeft} 1s forwards;
`

const ImageWrapper = styled.div`
  text-align: center;
  order: ${props => props.flipped};
  overflow: hidden;
`

const ContentWrapperWithImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1300px;
  max-height: 400px;
  margin: 30px auto;

  > * {
    opacity: 0;

    :nth-child(${props => (props.flipped === "1" ? "2" : "1")}) {
      animation: ${slideLeft} 1s forwards;
    }

    :nth-child(${props => (props.flipped === "1" ? "1" : "2")}) {
      animation: ${slideRight} 1s forwards;
    }
  }
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

const DetailWrapperNoImage = styled.div`
  padding: 0;
  display: grid;
  gap: 60px;
`

const Paragraph = styled(BodyMain)``

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

const IntroTitle = styled(H4)`
  text-align: center;
`

const OptionalButton = styled(Button)``
