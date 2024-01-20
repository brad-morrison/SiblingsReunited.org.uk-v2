import React from "react"
import styled, { keyframes } from "styled-components"
import { BodyMain, H4 } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"

function SiteBlock(props) {
  return (
    <LazyLoad height={"400px"}>
    <Wrapper>
      
      <ContentWrapper>
        <ImageWrapper flipped={props.flipped}>
          <Image src="/images/site.jpg" />
        </ImageWrapper>
        <TextWrapper>
          
          <Text>
            <Title>{props.title}</Title>
            <Paragraph>{<p dangerouslySetInnerHTML={{ __html: props.text}}></p>}</Paragraph>
          </Text>
          
        </TextWrapper>
      </ContentWrapper>
      
    </Wrapper>
    </LazyLoad>
    
  )
}

export default SiteBlock

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); filter: blur(10px)}
  to { opacity: 1;  transform: translateY(0px);  filter: blur(0px)}
`

const slideRight = keyframes`
  from { opacity: 0; transform: translateX(-20px); filter: blur(10px)}
  to { opacity: 1;  transform: translateX(0px);  filter: blur(0px)}
`

const slideLeft = keyframes`
  from { opacity: 0; transform: translateX(-20px); filter: blur(10px)}
  to { opacity: 1;  transform: translateX(0px);  filter: blur(0px)}
`

const zoomIn = keyframes`
  from { opacity: 0; transform: scale(0.8); filter: blur(10px)}
  to { opacity: 1;  transform: scale(1);  filter: blur(0px)}
`

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
    grid-template-columns: auto;
  }
`

const ImageWrapper = styled.div`
  max-height: 400px;
  padding: 30px;
  order: ${props => props.flipped};

  @media (max-width: 1034px) {
    grid-template-columns: auto;
    order: 0;
  }

  // animations
  opacity: 0;
  animation: ${slideRight} 0.8s forwards;
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
`

const Text = styled.div`
  display: grid;
  gap: 30px;

  > * {
    // animations
    opacity: 0;

    :nth-child(1) {
      animation: ${slideLeft} 0.8s 0.2s forwards;
    }

    :nth-child(2) {
      animation: ${slideRight} 0.8s 0.6s forwards;
    }
  }
`

const Paragraph = styled(BodyMain)``

const Title = styled(H4)``
