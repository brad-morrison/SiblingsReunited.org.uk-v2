import { stripLineComment } from "babel-plugin-styled-components/lib/minify"
import React from "react"
import styled from "styled-components"
import { BodyMain, H1, H4, MediumText } from "../styles/TextStyles"

function DetailDescSection(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <ImageWrapper flipped={props.flipped}>
          <Image src={props.image} />
        </ImageWrapper>
        <TextWrapper>
          <Text>
            <Title>{props.title}</Title>
            <Paragraph>{<p dangerouslySetInnerHTML={{ __html: props.text}}></p>}</Paragraph>
          </Text>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default DetailDescSection

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
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
