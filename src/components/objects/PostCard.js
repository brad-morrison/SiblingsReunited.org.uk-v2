import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H4, MediumText, BodyIntro, BodyMain } from "../styles/TextStyles"

function PostCard(props) {
  return (
    <CardWrapper>
      <CardImageWrapper>
        <CardImage src={props.img} />
      </CardImageWrapper>

      <CardText>
        <CardTitle>{props.title}</CardTitle>
        <CardSubTitle>{props.subTitle}</CardSubTitle>
      </CardText>
    </CardWrapper>
  )
}

export default PostCard

const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1.4fr 1fr;
  background: ${themes.secondaryBackground};
  border-radius: 22px;
  overflow: hidden;
  height: auto;

  // small
  @media (max-width: 688px) {
    grid-template-rows: 1fr auto;
  }
`

const CardImageWrapper = styled.div``

const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const CardText = styled.div`
  display: grid;
  gap: 10px;
  padding: 30px;
  height: auto;
`

const CardTitle = styled(H4)``

const CardSubTitle = styled(BodyMain)``
