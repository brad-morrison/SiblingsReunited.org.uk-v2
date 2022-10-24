import React from "react"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"

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
  background: #f4f4ef;
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
  padding: 20px;
  height: auto;
`

const CardTitle = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 36px;

  color: #000000;
`

const CardSubTitle = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;

  color: #000000;
`
