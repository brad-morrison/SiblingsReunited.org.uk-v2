import React from "react"
import styled, { keyframes } from "styled-components"
import { MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import LazyLoad from "react-lazy-load"
import { slideDown, speed } from "../styles/Animations"

export default function AnimalCard(props) {
  return (
    <LazyLoad>
      <Wrapper>
        <ContentWrapper>
          <ItemImage src={props.image}></ItemImage>
          <Title>{props.name}</Title>
          <Type>{props.type}</Type>
        </ContentWrapper>
      </Wrapper>
    </LazyLoad>
  )
}

const Wrapper = styled.div`
  background-color: ${themes.background};
  height: auto;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);

  // animation
  opacity: 0;
  animation: ${slideDown} ${speed} forwards;
`

const ContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
`

const ItemImage = styled.img`
  object-fit: cover;
  width: 200px;
  height: 220px;
  padding: 10px;
`

const Title = styled(MediumText)`
  font-weight: bold;
`

const Type = styled(MediumText)`
  margin-bottom: 10px;
`
