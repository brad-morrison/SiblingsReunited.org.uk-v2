import React from "react"
import styled, { keyframes } from "styled-components"
import FunderCard from "../objects/LogoCard"
import { themes } from "../styles/ColorStyles"
import { BodyIntro, H3 } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import LogoCard from "../objects/LogoCard"
import { slideDown, speed, zoomIn } from "../styles/Animations"

function LogoList(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <MainTitle>{props.title}</MainTitle>
        <FunderCards>
          <LogoCard logo="/images/logos/afka.png" />
          <LogoCard logo="/images/logos/sufs.png" />
          <LogoCard logo="/images/logos/promise.png" />
          <LogoCard logo="/images/logos/corra.png" />
        </FunderCards>
      </ContentWrapper>
    </Wrapper>
  )
}

export default LogoList

const Wrapper = styled.div`
  width: 100%;
`

const ContentWrapper = styled.div`
  //padding: 20px 30px;
`

const FunderCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 60px 0;
  background-color: ${themes.secondaryBackground};

  * {
    //animation
    opacity: 0;
    animation: ${zoomIn} ${speed} 0.2s forwards;
  }
`

const MainTitle = styled(H3)`
  text-align: center;
  margin-bottom: 30px;

  opacity: 0;
  animation: ${slideDown} ${speed} forwards;
`
