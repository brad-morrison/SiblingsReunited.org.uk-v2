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
  position: relative;
  //display: grid;
  //grid-template-columns: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  background: #f4f4ef;
  border-radius: 22px;
`

const CardImageWrapper = styled.div`
  position: relative;
`

const CardImage = styled.img`
  & {
    //width: 100%;
    height: 100%;
    max-width: 100%;

    //padding-bottom: 56%;
  }
  &:before {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
  }
`

const CardText = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 38px;
  min-height: 10rem;
  gap: 20px;
  margin: 20px 0;
`

const CardTitle = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  //font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 36px;

  color: #000000;
`

const CardSubTitle = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  //font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;

  color: #000000;
`
