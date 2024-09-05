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
            <Mascot src="/images/svg/mascot.svg"></Mascot>
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

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }

  @media (max-width: ${breaks.phone}) {
  }
`

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;

  @media (max-width: 940px) {
    order: 2;
  }

  @media (max-width: ${breaks.phone}) {
    transform: translateX(-30px);
  }
`

const TextWrapper = styled.div`
  opacity: 0;
  animation: ${slideDown} ${speed} forwards;
  padding: 50px;

  @media (max-width: 940px) {
  }
`

const Text = styled.div`
  display: grid;
  gap: 30px;
  vertical-align: middle;
`

const Title = styled(H1)``

const Paragraph = styled(BodyMain)``

const Mascot = styled.img`
  height: 300px;
  margin: auto;

  opacity: 0;
  animation: ${local_slideLeftRotate} ${speed} forwards;

  @media (max-width: ${breaks.tablet}) {
    height: 250px;
  }

  @media (max-width: ${breaks.phone}) {
    height: 200px;
  }
`

const ChildrenVector = styled.img`
  height: 400px;
  margin: auto;

  transform: translateX(-80px);
  opacity: 0;
  animation: ${local_slideRight} ${speed} forwards;

  @media (max-width: ${breaks.tablet}) {
    height: 340px;
  }

  @media (max-width: ${breaks.phone}) {
    height: 300px;
  }
`
