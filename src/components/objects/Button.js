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

const Wrapper = styled.div``
const ContentWrapper = styled.div``
const Text = styled(ButtonText)`
  background-color: ${themes.yellow};
  color: ${themes.text1};
`
