import React from "react"
import styled, { keyframes } from "styled-components"
import { breaks } from "../styles/BreakStyles"
import { themes } from "../styles/ColorStyles"
import LazyLoad from "react-lazy-load"
import {
  BodyMain,
  Caption,
  Caption2,
  H4,
  MediumText,
  SmallText,
  SmallText2,
} from "../styles/TextStyles"

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

// animations
const slideLeft = keyframes`
  from { opacity: 0; transform: translateX(-20px); filter: blur(10px)}
  to { opacity: 1;  transform: translateX(0px);  filter: blur(0px)}
`

const slideRight = keyframes`
  from { opacity: 0;  transform: translateX(50px); filter: blur(10px); }
  to { opacity: 1;   transform: translateX(0px);  filter: blur(0px)}
`

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
  animation: ${slideLeft} 1s forwards;
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
  animation: ${slideRight} 1s forwards;
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
