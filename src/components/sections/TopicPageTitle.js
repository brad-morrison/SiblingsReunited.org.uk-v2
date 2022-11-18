import React from "react"
import styled from "styled-components"
import { breaks } from "../styles/BreakStyles"
import { themes } from "../styles/ColorStyles"
import { H1 } from "../styles/TextStyles"

export default function TopicPageTitle(props) {
  return (
    <Wrapper>
      <ContentWrapper img={props.img}>
        <Title>{props.title}</Title>
        <Back></Back>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 25px;
`

const ContentWrapper = styled.div`
  position: relative;
  height: 320px;
  display: grid;
  justify-content: center;
  align-content: center;
  background: url(${props => props.img});
  background-size: cover;
  background-position: 50% 40%;
  padding: 30px;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  @media (max-width: ${breaks.phone}) {
    height: 240px;
  }
`

const Title = styled(H1)`
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 12px 24px;
  z-index: 100;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  @media (max-width: ${breaks.phone}) {
    font-size: 40px;
  }
`

const Back = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
