import React from "react"
import styled from "styled-components"
import { BodyMain, H4 } from "../styles/TextStyles"

export default function SiteBlockCircle(props) {
  return (
    <Wrapper>
      <ContentWrapper flipped={props.flipped}>
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
  max-width: 1200px;
  margin: auto;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  max-width: 1300px;
  margin: 20px auto;
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
  }
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
`

const Text = styled.div`
  display: grid;
  gap: 30px;
`

const Paragraph = styled(BodyMain)``

const Title = styled(H4)``
