import React from "react"
import styled from "styled-components"
import { breaks } from "../styles/BreakStyles"
import { themes } from "../styles/ColorStyles"
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
  )
}

const Wrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: auto auto;

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
  max-width: 240px;
  margin: auto;
`

const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  padding: 30px;
  gap: 20px;

  @media (max-width: 800px) {
  }
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
