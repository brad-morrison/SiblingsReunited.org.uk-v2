import React from "react"
import styled, { keyframes } from "styled-components"
import QuoteCard from "../objects/QuoteCard"
import LazyLoad from "react-lazy-load"
import { BodyIntro, H1, H2, H4, MediumText } from "../styles/TextStyles"
import { fadeIn, speed, zoomIn } from "../styles/Animations"

function Quotes(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <MainTitle>{props.title}</MainTitle>
        <QuoteCards>
          <QuoteCard
            quote="I just wanted to thank you for a brilliant visit to STAR today. Your
                  vision is amazing and the setting is perfect"
            author="Children's panel member"
          />
          <QuoteCard
            quote="I found it to be a magical place for Christopher to meet his siblings, with no one assessing or judging them"
            author="Kinship carer"
          />
          <QuoteCard
            quote="Most importantly for the girls, it was a carefree environment. Two hours of quality uninterrupted sister time."
            author="Foster carer"
          />
        </QuoteCards>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Quotes

const Wrapper = styled.div`
  position: relative;
`

const MainTitle = styled(H2)`
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;

  // animations
  opacity: 0;
  animation: ${fadeIn} ${speed} forwards;
`

const ContentWrapper = styled.div`
  max-width: 1300px;
  box-sizing: border-box;
  margin: 0 auto;
  height: auto;
`

const QuoteCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  height: auto;

  // mid
  @media (max-width: 1034px) {
    grid-template-columns: auto auto;
    gap: 20px;
  }

  // small
  @media (max-width: 688px) {
    grid-template-columns: auto;
    gap: 20px;
  }

  > * {
    // animations
    opacity: 0;
    animation: ${zoomIn} ${speed} forwards;

    :nth-child(1) {
      animation-delay: 0;
    }

    :nth-child(2) {
      animation-delay: 0.2s;
    }

    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`
