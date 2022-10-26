import { stripLineComment } from "babel-plugin-styled-components/lib/minify"
import React from "react"
import styled from "styled-components"
import PostCard from "../objects/PostCard"
import { H1, MediumText } from "../styles/TextStyles"

function SocialMediaButton(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <RoundButton src={props.type} width={props.width}></RoundButton>
      </ContentWrapper>
    </Wrapper>
  )
}

export default SocialMediaButton

const Wrapper = styled.div`
  background-color: ${props => props.color};
`

const ContentWrapper = styled.div``

const RoundButton = styled.img`
  width: ${props => (props.width ? props.width : "80px")};
`
