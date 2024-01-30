import { stripLineComment } from "babel-plugin-styled-components/lib/minify"
import React from "react"
import styled from "styled-components"
import PostCard from "../objects/PostCard"
import { themes } from "../styles/ColorStyles"
import { ButtonText, H1, MediumText } from "../styles/TextStyles"
import { breaks } from "../styles/BreakStyles"

function Button(props) {
  return (
    <Wrapper>
      <Text>{props.text}</Text>
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.div`
  height: fit-content;
`

const Text = styled(ButtonText)`
  background-color: ${themes.yellow};
  color: ${themes.text1};
  box-shadow: 0px 13px 30px rgba(0, 0, 0, 0.1);
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    box-shadow: 0px 13px 30px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  @media (max-width: ${breaks.phone}) {
    font-size: large;
  }
`
