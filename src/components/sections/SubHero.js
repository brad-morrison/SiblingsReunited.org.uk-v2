import React from "react"
import styled, { keyframes } from "styled-components"
import { BodyMain, H1, H2, H3, H4, MediumText } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import { slideDown, slideLeft, slideRight, speed } from "../styles/Animations"
import { breaks } from "../styles/BreakStyles"

function SubHero(props) {
  return (
    <Wrapper>
      <LazyLoad>
        <ContentWrapper>
          <ImageWrapper flipped={props.flipped}>
            <Mascot src="/images/logos/Mascot.svg"></Mascot>
            <ChildrenVector src="/images/svg/kids.svg"></ChildrenVector>
          </ImageWrapper>
          <TextWrapper>
            <Text>
              <Title>{props.title}</Title>
              <Paragraph>
                {<p dangerouslySetInnerHTML={{ __html: props.text }}></p>}
              </Paragraph>
            </Text>
          </TextWrapper>
        </ContentWrapper>
      </LazyLoad>
    </Wrapper>
  )
}

export default SubHero

// local animations (not from global animation script)
// Mascot animation
const local_slideLeftRotate = keyframes`
  from { opacity: 0; transform: translateX(-80px) rotate(-30deg); filter: blur(20px)}
  to { opacity: 1;  transform: translateX(80px) rotate(0deg);  filter: blur(0px)}
`

// children vector animation
export const local_slideRight = keyframes`
  from { opacity: 0;  transform: translateX(0px); filter: 10px}
  to { opacity: 1;   transform: translateX(-80px);  filter: blur(0px)}
`

const Wrapper = styled.div`
  width: 100%;
`

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media (max-width: ${breaks.phone}) {
  }
`

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${breaks.phone}) {
  }
`

const TextWrapper = styled.div``

const Text = styled.div`
  display: grid;
  gap: 30px;
  vertical-align: middle;
`

const Title = styled(H2)`
  @media (max-width: ${breaks.phone}) {
    font-size: x-large;
  }
`

const Paragraph = styled(BodyMain)`
  @media (max-width: ${breaks.phone}) {
    font-size: large;
  }
`

const Mascot = styled.img`
  height: 300px;
  margin: auto;

  opacity: 0;
  animation: ${local_slideLeftRotate} ${speed} forwards;

  @media (max-width: ${breaks.phone}) {
  }
`

const ChildrenVector = styled.img`
  height: 400px;
  margin: auto;

  transform: translateX(-80px);
  opacity: 0;
  animation: ${local_slideRight} ${speed} forwards;

  @media (max-width: ${breaks.phone}) {
  }
`
