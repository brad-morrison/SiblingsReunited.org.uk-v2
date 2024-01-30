import React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import {
  BodyMain,
  Caption,
  Caption2,
  H2,
  H4,
  SmallText,
} from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import { slideLeft, slideRight, speed } from "../styles/Animations"

export default function FundraiserCard(props) {
  return (
    <LazyLoad>
      <Wrapper>
        <CardWrapper>
          <Image img={props.image}></Image>
        </CardWrapper>
        <TextWrapper>
          <Title>{props.name}</Title>
          <Text>{props.text}</Text>
          <AmountWrapper>
            <Amount>£{props.raised} Raised</Amount>
          </AmountWrapper>
        </TextWrapper>
      </Wrapper>
    </LazyLoad>
  )
}

const Wrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr 2fr;

  max-width: 1000px;
  margin: 50px auto;
  gap: 30px;

  @media (max-width: 800px) {
    gap: 20px;
    grid-template-columns: auto;
  }
`

const CardWrapper = styled.div`
  box-shadow: 0px 7px 22px rgba(0, 0, 0, 0.3);
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

const Title = styled(H2)``

const Image = styled.img`
  width: 400px;
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

const AmountWrapper = styled.div`
  background-color: lightgreen;
  width: fit-content;
  padding: 10px 14px;
  border-radius: 12px;
`

const Amount = styled(Caption2)`
  font-size: 22px;
`
