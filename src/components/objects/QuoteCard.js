import { stripLineComment } from "babel-plugin-styled-components/lib/minify"
import React from "react"
import styled from "styled-components"
import PostCard from "../objects/PostCard"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

function QuoteCard(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <Text>{props.quote}</Text>
        <Author>{props.author}</Author>
      </ContentWrapper>
    </Wrapper>
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

  background-color: ${themes.secondaryBackground};
`

const Text = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`

const Author = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`
