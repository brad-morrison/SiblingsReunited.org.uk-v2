import { stripLineComment } from "babel-plugin-styled-components/lib/minify"
import React from "react"
import styled from "styled-components"
import PostCard from "../objects/PostCard"
import QuoteCard from "../objects/QuoteCard"
import { BodyIntro, H1, MediumText } from "../styles/TextStyles"

function QuotesSection(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <MainTitle>What people say</MainTitle>
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

export default QuotesSection

const Wrapper = styled.div`
  position: relative;
`

const MainTitle = styled(BodyIntro)`
  text-align: center;
  margin-bottom: 30px;
`

const ContentWrapper = styled.div`
  max-width: 1300px;
  box-sizing: border-box;
  margin: 20px auto;
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
`
