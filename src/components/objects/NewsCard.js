import { Link } from "gatsby"
import React from "react"
import styled, { keyframes } from "styled-components"
import LazyLoad from "react-lazy-load"

import { BodyMain, H3, Caption } from "../styles/TextStyles"
import { slideDown, speed, zoomIn } from "../styles/Animations"

function NewsCard(props) {
  return (
    <LazyLoad>
      <Wrapper>
        <ContentWrapper>
          <ImageWrapper>
            <Link to={props.link}>
              <Image src={props.image} />
            </Link>
          </ImageWrapper>
          <TextWrapper>
            <Date>{props.date}</Date>
            <Link to={props.link}>
              <Title>{props.title}</Title>
            </Link>
            <Paragraph>{props.subTitle}</Paragraph>
            <Link to={props.link}>
              <SmallLink>Read Article</SmallLink>
            </Link>
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    </LazyLoad>
  )
}

export default NewsCard

const Wrapper = styled.div`
  width: 100%;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;

  // mobile
  @media (max-width: 770px) {
    grid-template-columns: auto;
  }
`

const ImageWrapper = styled.div`
  border-radius: 15px;
  overflow: hidden;
`

const TextWrapper = styled.div`
  display: grid;
  padding: 10px 20px;
  justify-content: start;
  align-items: center;

  // mobile
  @media (max-width: 770px) {
    gap: 20px;
  }

  // animation
  opacity: 0;
  animation: ${slideDown} ${speed} forwards;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 220px;

  // mobile
  @media (max-width: 770px) {
    height: 300px;
  }

  // animation
  opacity: 0;
  animation: ${zoomIn} ${speed} forwards;
`

// text styles
const Date = styled(Caption)``
const Paragraph = styled(BodyMain)``
const Title = styled(H3)`
  color: black;
`
const SmallLink = styled(Caption)`
  color: black;
  font-weight: bold;
`
