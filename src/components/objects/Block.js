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
            <Image src={props.image} />
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
`

const ContentWrapperWithImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1300px;
  margin: 0 auto;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1300px;
  margin: 0 auto;
`

ContentWrapper.defaultProps = {
  image: "",
}

const ImageWrapper = styled.div`
  //max-height: 400px;
  height: 400px;
  padding: 30px;
  order: ${props => props.flipped};
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
  border: 0.5px lightgray solid;
`

const DetailWrapper = styled.div`
  padding: 30px;
  display: grid;
  gap: 30px;
`

const Paragraph = styled(BodyMain)``

const Title = styled(H3)``

const IntroTitle = styled(H4)`
  text-align: center;
`

const OptionalButton = styled(Button)``
