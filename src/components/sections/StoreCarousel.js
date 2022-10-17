import React from "react"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"

function StoreCarousel() {
  return (
    <Wrapper>
      <ContentWrapper>
        <CarouselItem>
          <CarouselThumbnail></CarouselThumbnail>
          <CarouselText>
            <h3>Buy item here</h3>
          </CarouselText>
        </CarouselItem>
      </ContentWrapper>
    </Wrapper>
  )
}

export default StoreCarousel

const Wrapper = styled.div`
  position: relative;
`

const ContentWrapper = styled.div`
  max-width: 980px;
  margin: 100px auto;
  padding: 0 20px;

  display: grid;
  grid-template-columns: 500px auto;
  gap: 0px;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    gap: 30px;
  }
`

const CarouselItem = styled.div``

const CarouselThumbnail = styled.div`
  background-color: red;
  width: 380px;
  height: 240px;
  border-radius: 15px;
`

const CarouselText = styled.div`
  text-align: center;
`
