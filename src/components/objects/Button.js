import { stripLineComment } from "babel-plugin-styled-components/lib/minify"
import React from "react"
import styled from "styled-components"
import PostCard from "../objects/PostCard"
import { H1, MediumText } from "../styles/TextStyles"

function Button(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <Text>{props.text}</Text>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.div``

const ContentWrapper = styled.div``

const Text = styled.p`
  width: fit-content;
  padding: 18px 22px;
  border-radius: 50px;
  background-color: #fbd878;

  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
`
