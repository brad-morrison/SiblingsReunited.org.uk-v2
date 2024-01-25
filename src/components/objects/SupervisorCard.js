import React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import LazyLoad from "react-lazy-load"
import {
  BodyMain,
  Caption,
  H4,
  MediumText,
  SmallText,
} from "../styles/TextStyles"
import { slideLeft, slideRight, speed } from "../styles/Animations"

export default function SupervisorCard(props) {
  return (
    <LazyLoad>
      <Wrapper>
        <CardWrapper>
          <Image img={props.image}></Image>
          <Details>
            <MemberName>{props.name}</MemberName>
            <MemberRole>{props.role}</MemberRole>
          </Details>
        </CardWrapper>
        <TextWrapper>
          <Title>{props.name}</Title>
          <Text>{props.text}</Text>
          <Quote>"{props.quote}"</Quote>
        </TextWrapper>
      </Wrapper>
    </LazyLoad>
  )
}

const Wrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: auto auto;

  max-width: 1000px;
  margin: 0 auto;
  gap: 30px;

  @media (max-width: 800px) {
    gap: 20px;
    grid-template-columns: auto;
  }
`

const CardWrapper = styled.div`
  box-shadow: 0px 7px 22px rgba(0, 0, 0, 0.3);
  max-width: 240px;
  margin: auto;

  // animations
  opacity: 0;
  animation: ${slideLeft} ${speed} forwards;
`

const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  padding: 30px;
  gap: 20px;

  @media (max-width: 800px) {
  }

  // animations
  opacity: 0;
  animation: ${slideRight} ${speed} forwards;
`

const Text = styled(BodyMain)``

const Title = styled(H4)``

const Quote = styled(MediumText)`
  opacity: 40%;
`

const Image = styled.img`
  width: 240px;
  height: 240px;
  background: url(${props => props.img});
  background-size: cover;
`

const Details = styled.div`
  display: grid;
  padding: 12px 16px;
  gap: 6px;
  background-color: ${themes.secondaryBackground};
`

const MemberName = styled(Caption)`
  font-size: 16px;
`

const MemberRole = styled(SmallText)`
  opacity: 60%;
  font-style: italic;
  font-size: 14px;
`
