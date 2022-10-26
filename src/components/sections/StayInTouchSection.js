import { stripLineComment } from "babel-plugin-styled-components/lib/minify"
import React from "react"
import styled from "styled-components"
import Button from "../objects/Button"
import PostCard from "../objects/PostCard"
import SocialMediaButton from "../objects/SocialMediaButton"
import { H1, MediumText } from "../styles/TextStyles"

function StayInTouchSection() {
  const buttonSize = "75px"
  return (
    <Wrapper>
      <ContentWrapper>
        <ImageWrapper>
          <Image src="7.png" />
        </ImageWrapper>
        <TextWrapper>
          <Text>
            <Title>Stay in touch</Title>
            <Paragraph>
              Follow us on social media to keep up with the latest news or find
              out more. We love letting everyone know what our sibling groups
              have been up to!
            </Paragraph>
          </Text>
          <ButtonWrapper>
            <SocialMediaButton type="face.svg" width={buttonSize} />
            <SocialMediaButton type="twit.svg" width={buttonSize} />
            <SocialMediaButton type="inst.svg" width={buttonSize} />
          </ButtonWrapper>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default StayInTouchSection

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 30px auto;
  background-color: #f4f4ef;
`

const MainTitle = styled.p`
  text-align: center;
  margin-top: 30px;

  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1300px;
  margin: 0 auto;
  margin-bottom: 30px;

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

const Paragraph = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 36px;

  color: #000000;
`

const Title = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 50px;

  color: #000000;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`
