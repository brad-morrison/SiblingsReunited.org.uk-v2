import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import LazyLoad from "react-lazy-load"
import { MediumText } from "../styles/TextStyles"

function QuoteCard(props) {
  return (
    <LazyLoad>
      <Wrapper>
        <ContentWrapper>
          <Text>{props.quote}</Text>
          <Author>{props.author}</Author>
        </ContentWrapper>
      </Wrapper>
    </LazyLoad>
  )
}

export default QuoteCard

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
  padding: 40px;
  border-radius: 30px;
  border: 0.5px lightgray solid;

  background-color: ${themes.secondaryBackground};
`

const Text = styled(MediumText)`
  font-weight: bold;
`

const Author = styled(MediumText)``
