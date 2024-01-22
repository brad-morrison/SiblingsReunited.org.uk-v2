import React from "react"
import styled, { keyframes } from "styled-components"
import { BodyMain, H1, H3, H4, MediumText } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import Button from "./Button"

function Block(props) {
  return (
    <Wrapper>
      <IntroTitle>{props.introTitle}</IntroTitle>
      {/* if image passed in */}
      {props.image ? (
        <ContentWrapperWithImage>
          <ImageWrapper flipped={props.flipped}>
            <Image src={props.image} round={props.round} />
          </ImageWrapper>
          <DetailWrapper>
            <Title>{props.title}</Title>
            <Paragraph>
              {<p dangerouslySetInnerHTML={{ __html: props.text }}></p>}
            </Paragraph>
            {props.button && <OptionalButton text={props.button} />}
          </DetailWrapper>
        </ContentWrapperWithImage>
      ) : (
        <ContentWrapper>
          <DetailWrapper>
            <Title>{props.title}</Title>
            <Paragraph>
              {<p dangerouslySetInnerHTML={{ __html: props.text }}></p>}
            </Paragraph>
            {props.button && <OptionalButton text={props.button} />}
          </DetailWrapper>
        </ContentWrapper>
      )}
    </Wrapper>
  )
}

export default Block

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  align-items: center;
  max-height: 500px;
  min-height: 300px;
`

const ContentWrapperWithImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1300px;
  margin: 30px auto;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 1300px;
  margin: 0 auto;
`

const ImageWrapper = styled.div`
  max-height: 400px;
  height: 100%;
  display: flex;
  order: ${props => props.flipped};
  justify-self: center;
  overflow: hidden;
`

const Image = styled.img`
  object-fit: cover;
  border: 0.5px lightgray solid;
  width: ${props => (props.round ? "400px" : "auto")};
  aspect-ratio: ${props => (props.round ? "1/1" : "auto")};
  border-radius: ${props => (props.round ? "50%" : "0")};
`

const DetailWrapper = styled.div`
  padding: 20px;
  display: grid;
  gap: 20px;
`

const Paragraph = styled(BodyMain)``

const Title = styled(H3)``

const IntroTitle = styled(H4)`
  text-align: center;
`

const OptionalButton = styled(Button)``
