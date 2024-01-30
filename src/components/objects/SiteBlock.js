import React from "react"
import styled, { keyframes } from "styled-components"
import { BodyMain, H2, H4 } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import { slideLeft, slideRight, speed } from "../styles/Animations"

function SiteBlock(props) {
  return (
    <LazyLoad>
      <Wrapper>
        <ContentWrapper>
          <ImageWrapper flipped={props.flipped}>
            <Image src="/images/site.jpg" />
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
      </Wrapper>
    </LazyLoad>
  )
}

export default SiteBlock

const Wrapper = styled.div`
  position: relative;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1300px;
  margin: 0 auto;

  // mid
  @media (max-width: 1034px) {
    grid-template-columns: 1fr;
  }
`

const ImageWrapper = styled.div`
  max-height: 400px;
  order: ${props => props.flipped};

  @media (max-width: 1034px) {
    grid-template-columns: auto;
    order: 0;
  }

  // animations
  opacity: 0;
  animation: ${slideRight} ${speed} forwards;
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
  height: 100%;
  display: grid;
  align-items: center;
`

const Text = styled.div`
  display: grid;
  gap: 30px;

  > * {
    // animations
    opacity: 0;

    :nth-child(1) {
      animation: ${slideLeft} ${speed} 0.2s forwards;
    }

    :nth-child(2) {
      animation: ${slideRight} ${speed} 0.6s forwards;
    }
  }
`

const Paragraph = styled(BodyMain)``

const Title = styled(H2)``
