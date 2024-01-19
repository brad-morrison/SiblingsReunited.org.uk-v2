import React from "react"
import styled, { keyframes } from "styled-components"
import FunderCard from "../objects/FunderCard"
import { themes } from "../styles/ColorStyles"
import { BodyIntro } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"

function FunderSection(props) {
  return (
    <LazyLoad>
    <Wrapper>
      <ContentWrapper>
        <MainTitle>{props.title}</MainTitle>
        <FunderCards>
          <FunderCard logo="/images/logos/lottery.png" />
          <FunderCard logo="/images/logos/corra.png" />
        </FunderCards>
      </ContentWrapper>
    </Wrapper>
    </LazyLoad>
  )
}

export default FunderSection

const zoomIn = keyframes`
  from { opacity: 0; transform: scale(0.8); filter: blur(10px)}
  to { opacity: 1;  transform: scale(1);  filter: blur(0px)}
`

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); filter: blur(10px)}
  to { opacity: 1;  transform: translateY(0px);  filter: blur(0px)}
`

const Wrapper = styled.div`
  background-color: ${themes.secondaryBackground};
`

const ContentWrapper = styled.div`
  //padding: 20px 30px;
`

const FunderCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  * {
    //animation
    opacity: 0;
    animation: ${zoomIn} 1s 0.2s forwards;
  }
`

const MainTitle = styled(BodyIntro)`
  text-align: center;

  //animation
  opacity: 0;
  animation: ${slideDown} 1s forwards;
`
