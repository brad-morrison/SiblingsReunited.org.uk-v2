import React from "react"
import styled, { keyframes } from "styled-components"
import FunderCard from "../objects/LogoCard"
import { themes } from "../styles/ColorStyles"
import { BodyIntro } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import LogoCard from "../objects/LogoCard"
import { slideDown, zoomIn } from "../styles/Animations"

function LogoList(props) {
  return (
    <LazyLoad>
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
    </LazyLoad>
  )
}

export default LogoList

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
  padding: 60px 0;

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
