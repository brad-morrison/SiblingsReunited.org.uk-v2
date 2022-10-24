import { stripLineComment } from "babel-plugin-styled-components/lib/minify"
import React from "react"
import styled from "styled-components"
import PostCard from "../objects/PostCard"
import { H1, MediumText } from "../styles/TextStyles"

function DetailDescSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <ImageWrapper>
          <Image src="4.jpg" />
        </ImageWrapper>
        <TextWrapper>
          <Text>
            Siblings Reunited (STAR) reunites Brothers and Sisters separated in
            the care system, through adoption or Kinship care by providing the
            opportunity for quality and regular Sibling contact.
          </Text>
          <Text>
            Run from its unique farmland setting it provides a safe, fun and
            exhilarating learning environment where children can foster
            emotional bonds and help overcome the trauma associated with being
            separated.
          </Text>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default DetailDescSection

const Wrapper = styled.div`
  position: relative;
`

const ContentWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  max-width: 1300px;
  box-sizing: border-box;
  margin: 100px auto;
  height: auto;
  padding: 0 30px;

  // mid
  @media (max-width: 1034px) {
    grid-template-columns: auto;
    padding: 0 20px;
    gap: 20px;
  }
`

const ImageWrapper = styled.div`
  padding: 0px;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const TextWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: auto;
  padding: 10px;
`

const Text = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;

  color: #000000;
`
