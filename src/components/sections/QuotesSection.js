import { stripLineComment } from "babel-plugin-styled-components/lib/minify"
import React from "react"
import styled, { keyframes } from "styled-components"
import PostCard from "../objects/PostCard"
import QuoteCard from "../objects/QuoteCard"
import LazyLoad from "react-lazy-load"
import { BodyIntro, H1, MediumText } from "../styles/TextStyles"

function QuotesSection(props) {
  return (
    <Wrapper>
      <LazyLoad>
      <ContentWrapper>
        <MainTitle hideTitle={props.hideTitle}>What people say</MainTitle>
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
      </LazyLoad>
    </Wrapper>
  )
}

export default QuotesSection

const zoomIn = keyframes`
  from { opacity: 0; transform: scale(0.8); filter: blur(10px)}
  to { opacity: 1;  transform: scale(1);  filter: blur(0px)}
`

const Wrapper = styled.div`
  position: relative;
`

const MainTitle = styled(BodyIntro)`
  text-align: center;
  //margin-bottom: 30px;
  display: ${props => (props.hideTitle = true ? "none" : "block")};
`

const ContentWrapper = styled.div`
  max-width: 1300px;
  box-sizing: border-box;
  margin: 0 auto;
  height: auto;
`

const QuoteCards = styled.div`
  display: grid;
  padding: 0 30px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  height: auto;

  // mid
  @media (max-width: 1034px) {
    grid-template-columns: auto auto;
    padding: 0 20px;
    gap: 20px;
  }

  // small
  @media (max-width: 688px) {
    grid-template-columns: auto;
    padding: 0 20px;
    gap: 20px;
  }

  > * {
  // animations
  opacity: 0;
  animation: ${zoomIn} 1s forwards;

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
