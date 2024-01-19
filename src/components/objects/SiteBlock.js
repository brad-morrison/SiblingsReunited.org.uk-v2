import React from "react"
import styled from "styled-components"
import { BodyMain, H4 } from "../styles/TextStyles"

export default function SiteBlock(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <ImageWrapper flipped={props.flipped}>
          <Image src="/images/site.jpg" />
        </ImageWrapper>
        <TextWrapper>
          <Text>
            <Title>{props.title}</Title>
            <Paragraph>{props.text1}</Paragraph>
            <Paragraph>{props.text2}</Paragraph>
          </Text>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1300px;
  margin: 20px auto;

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
`

const Paragraph = styled(BodyMain)``

const Title = styled(H4)``