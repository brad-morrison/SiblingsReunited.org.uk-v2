import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H1 } from "../styles/TextStyles"

export default function TopicPageTitle() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>About Us</Title>
        <Back>f</Back>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const ContentWrapper = styled.div`
  position: relative;
  height: 320px;
  display: grid;
  justify-content: center;
  align-content: center;
  background: url("/images/volunteer.jpg");
  background-size: cover;
  background-position: 50% 40%;
`

const Title = styled(H1)`
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 12px 24px;
  z-index: 100;
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
