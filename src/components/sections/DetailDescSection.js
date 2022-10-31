import { stripLineComment } from "babel-plugin-styled-components/lib/minify"
import React from "react"
import styled from "styled-components"
import { BodyMain, H1, MediumText } from "../styles/TextStyles"

function DetailDescSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <ImageWrapper>
          <Image src="4.jpg" />
        </ImageWrapper>
        <TextWrapper>
          <Text>
            <Paragraph>
              Siblings Reunited (STAR) reunites Brothers and Sisters separated
              in the care system, through adoption or Kinship care by providing
              the opportunity for quality and regular Sibling contact.
            </Paragraph>
            <Paragraph>
              Run from its unique farmland setting it provides a safe, fun and
              exhilarating learning environment where children can foster
              emotional bonds and help overcome the trauma associated with being
              separated.
            </Paragraph>
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
  align-items: center;
`

const Text = styled.div`
  display: grid;
  gap: 30px;
`

const Paragraph = styled(BodyMain)``
