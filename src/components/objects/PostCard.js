import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H4, BodyMain, H2, H3 } from "../styles/TextStyles"
import { breaks } from "../styles/BreakStyles"

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
  border: 0.5px lightgray solid;
  overflow: hidden;
  height: auto;

  box-shadow: 0px 7px 22px rgba(0, 0, 0, 0.1);
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  // small
  @media (max-width: 688px) {
    grid-template-rows: 1fr auto;
  }

  :hover {
    transform: translateY(-5px);
    cursor: pointer;
    box-shadow: 0px 15px 22px rgba(0, 0, 0, 0.15);
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

const CardTitle = styled(H3)``

const CardSubTitle = styled(BodyMain)``
