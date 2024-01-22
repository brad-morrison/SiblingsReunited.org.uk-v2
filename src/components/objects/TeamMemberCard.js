import React from "react"
import styled, { keyframes } from "styled-components"
import { breaks } from "../styles/BreakStyles"
import { themes } from "../styles/ColorStyles"
import { Caption2, SmallText } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"

export default function TeamMemberCard(props) {
  return (
    <LazyLoad>
      <Wrapper>
        <Image img={props.image}></Image>
        <Details>
          <MemberName>{props.firstName}</MemberName>
          <MemberRole>{props.role}</MemberRole>
        </Details>
      </Wrapper>
    </LazyLoad>
  )
}

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); filter: blur(10px)}
  to { opacity: 1;  transform: translateY(0px);  filter: blur(0px)}
`

const Wrapper = styled.div`
  width: fit-content;
  display: grid;
  box-shadow: 0px 7px 22px rgba(0, 0, 0, 0.1);

  // animation
  opacity: 0;
  animation: ${slideDown} 1s forwards;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  background: url(${props => props.img});
  background-size: cover;

  @media (max-width: ${breaks.phone}) {
    width: 150px;
    height: 150px;
  }
`

const Details = styled.div`
  display: grid;
  padding: 12px 16px;
  gap: 6px;
  background-color: ${themes.secondaryBackground};
`

const MemberName = styled(Caption2)`
  font-size: 16px;
`

const MemberRole = styled(SmallText)`
  opacity: 60%;
  font-style: italic;
  font-size: 14px;
`
