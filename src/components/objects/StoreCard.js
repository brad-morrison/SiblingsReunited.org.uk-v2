import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import {
  BodyIntro,
  BodyMain,
  ButtonText,
  Caption,
  Caption2,
  H1,
  H3,
  MediumText,
  SmallText,
  SmallText2,
} from "../styles/TextStyles"

function StoreCard() {
  return (
    <Wrapper>
      <ContentWrapper>
        <ItemImage src="7.png"></ItemImage>
        <Title>Homemade Tablet</Title>
        <Price>£2.99</Price>
      </ContentWrapper>
    </Wrapper>
  )
}

export default StoreCard

const Wrapper = styled.div`
  background-color: ${themes.background};
  width: 300px;
  min-width: 300px;
  height: auto;
  box-shadow: 0px 13px 30px rgba(0, 0, 0, 0.1);
`

const ContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
`

const ItemImage = styled.img`
  object-fit: cover;
  width: 100%;
  padding: 10px;
`

const Title = styled(MediumText)`
  font-weight: bold;
`

const Price = styled(MediumText)`
  margin-bottom: 10px;
`
