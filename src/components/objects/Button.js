import { stripLineComment } from "babel-plugin-styled-components/lib/minify"
import React from "react"
import styled from "styled-components"
import PostCard from "../objects/PostCard"
import { themes } from "../styles/ColorStyles"
import { ButtonText, H1, MediumText } from "../styles/TextStyles"

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

const Wrapper = styled.div`
  display: grid;
  align-content: center;
  z-index: 100;
`
const ContentWrapper = styled.div``
const Text = styled(ButtonText)`
  background-color: ${themes.yellow};
  color: ${themes.text1};
  box-shadow: 0px 13px 30px rgba(0, 0, 0, 0.1);
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    box-shadow: 0px 13px 30px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`
