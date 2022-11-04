import React from "react"
import styled from "styled-components"
import Button from "../objects/Button"
import StoreCard from "../objects/StoreCard"
import { themes } from "../styles/ColorStyles"
import { BodyIntro, BodyMain } from "../styles/TextStyles"

function StoreSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Buy our goodies</Title>
        <SubTitle>100% of profits go to charity!</SubTitle>
        <Carousel>
          <StoreCard
            img="/images/tablet.jpg"
            name="Homemade Tablet"
            price="2.99"
          />
          <StoreCard
            img="/images/birdhouse.jpg"
            name="Birdhouse Kit"
            price="6.99"
          />
          <StoreCard
            img="/images/fairyDoor.jpg"
            name="Fairy Door"
            price="3.99"
          />
          <StoreCard
            img="/images/tablet.jpg"
            name="Homemade Tablet"
            price="2.99"
          />
          <StoreCard
            img="/images/fairyDoor.jpg"
            name="Fairy Door"
            price="3.99"
          />
          <StoreCard
            img="/images/birdhouse.jpg"
            name="Birdhouse Kit"
            price="6.99"
          />
          <StoreCard
            img="/images/tablet.jpg"
            name="Homemade Tablet"
            price="2.99"
          />
          <StoreCard
            img="/images/birdhouse.jpg"
            name="Birdhouse Kit"
            price="6.99"
          />
          <StoreCard
            img="/images/fairyDoor.jpg"
            name="Fairy Door"
            price="3.99"
          />
          <StoreCard
            img="/images/tablet.jpg"
            name="Homemade Tablet"
            price="2.99"
          />
        </Carousel>
        <ButtonWrapper>
          <Button text="Visit our shop" />
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default StoreSection

const Wrapper = styled.div`
  background-color: ${themes.secondaryBackground};
  padding: 30px 0;
  margin: 30px 0px;
`

const ContentWrapper = styled.div`
  text-align: center;
  display: grid;
  gap: 8px;
  justify-content: center;
`

const Carousel = styled.div`
  padding: 50px 60px;
  display: flex;
  gap: 40px;
  overflow-x: scroll;
`

const Title = styled(BodyIntro)``

const SubTitle = styled(BodyMain)``

const ButtonWrapper = styled.div`
  justify-self: center;
`
