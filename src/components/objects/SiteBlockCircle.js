import React from "react"
import styled, { keyframes } from "styled-components"
import { BodyMain, H4 } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"

export default function SiteBlockCircle(props) {
  return (
    <LazyLoad>
    <Wrapper>
      <ContentWrapper flipped={props.flipped}>
        <ImageWrapper flipped={props.flipped}>
          <Image src={props.image} />
        </ImageWrapper>
        <TextWrapper>
          <Text>
            <Title>{props.title}</Title>
            <Paragraph>{<p dangerouslySetInnerHTML={{ __html: props.text1}}></p>}</Paragraph>
          </Text>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
    </LazyLoad>
  )
}

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); filter: blur(10px)}
  to { opacity: 1;  transform: translateY(0px);  filter: blur(0px)}
`

const zoomIn = keyframes`
  from { opacity: 0; transform: scale(0.8); filter: blur(10px)}
  to { opacity: 1;  transform: scale(1);  filter: blur(0px)}
`

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 1000px;
  margin: auto;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  max-width: 1300px;
  margin: 0px auto;
  justify-content: center;

  // mid
  @media (max-width: 1034px) {
    grid-template-columns: auto;
  }
`

const ImageWrapper = styled.div`
  padding: 30px;
  order: ${props => props.flipped};
  justify-self: end;

  @media (max-width: 1034px) {
    order: 0;
    justify-self: center;
  }

  //animation
  opacity: 0;
    animation: ${zoomIn} 1s 0.2s forwards;
`

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  vertical-align: middle;
  border: 0.5px lightgray solid;
  border-radius: 500px;
`

const TextWrapper = styled.div`
  padding: 30px;
  display: grid;
  align-items: center;

  // animation
  opacity: 0;
  animation: ${slideDown} 1s forwards;
`

const Text = styled.div`
  display: grid;
  gap: 30px;
`

const Paragraph = styled(BodyMain)``

const Title = styled(H4)``
