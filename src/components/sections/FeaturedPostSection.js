import { stripLineComment } from "babel-plugin-styled-components/lib/minify"
import React from "react"
import styled from "styled-components"
import Button from "../objects/Button"
import PostCard from "../objects/PostCard"
import { themes } from "../styles/ColorStyles"
import { BodyIntro, BodyMain, H1, H3, MediumText } from "../styles/TextStyles"

function FeaturedPostSection(props) {
  return (
    <Wrapper>
      <MainTitle>Featured Post</MainTitle>
      <ContentWrapper>
        <ImageWrapper>
          <Image src={props.image} />
        </ImageWrapper>
        <TextWrapper>
          <Text>
            <Title>{props.title}</Title>
            <Paragraph>{<p dangerouslySetInnerHTML={{ __html: props.text}}></p>}</Paragraph>
          </Text>
          <ButtonWrapper>
            <Button text="Read more" />
          </ButtonWrapper>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default FeaturedPostSection

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  background-color: ${themes.secondaryBackground};
`

const MainTitle = styled(BodyIntro)`
  text-align: center;
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
  gap: 30px;
  align-items: center;
`

const Text = styled.div`
  display: grid;
  gap: 30px;
`

const Paragraph = styled(BodyMain)``

const Title = styled(H3)``

const ButtonWrapper = styled.div``
