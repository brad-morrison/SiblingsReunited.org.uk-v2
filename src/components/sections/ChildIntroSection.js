import { stripLineComment } from "babel-plugin-styled-components/lib/minify"
import React from "react"
import styled from "styled-components"
import Button from "../objects/Button"
import PostCard from "../objects/PostCard"
import {
  BodyIntro,
  BodyMain,
  H1,
  H2,
  H3,
  MediumText,
} from "../styles/TextStyles"

function ChildIntroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Text>
            <Title>Are you a child coming to STAR Siblings Reunited?</Title>
            <Paragraph>
              We can’t wait to welcome you and your siblings! Click below to
              open our child page and see what fun activities you can do
              together.
            </Paragraph>
          </Text>
          <ButtonWrapper>
            <Button text="What can I do at STAR?" />
          </ButtonWrapper>
        </TextWrapper>
        <ImageWrapper>
          <Image src="5.jpeg" />
        </ImageWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default ChildIntroSection

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1300px;
  margin: 30px auto;

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
