import React from "react"
import styled, { keyframes } from "styled-components"
import { H3, BodyMain } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import AnimalCard from "../objects/AnimalCard"
import { animals } from "../../data/Animals"

export default function Animals() {
  return (
    <LazyLoad>
      <Wrapper>
        <ContentWrapper>
          <SubHeading id="animals">Meet the animals..</SubHeading>
          <TextBlock>
            <Text>
              We have lots of special animals here at STAR Siblings Reunited. We
              have lots of special animals here at STAR Siblings Reunited. We
              have lots of special animals here at STAR Siblings Reunited.
            </Text>
          </TextBlock>
          <AnimalCards>
            {animals.map((animal, index) => (
              <AnimalCard
                key={index}
                name={animal.name}
                type={animal.type}
                image={animal.image}
              ></AnimalCard>
            ))}
          </AnimalCards>
        </ContentWrapper>
      </Wrapper>
    </LazyLoad>
  )
}

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); filter: blur(10px)}
  to { opacity: 1;  transform: translateY(0px);  filter: blur(0px)}
`

const fadeIn = keyframes`
  from { opacity: 0; filter: blur(3px)}
  to { opacity: 1; filter: blur(0px)}
`

const Wrapper = styled.div``

const ContentWrapper = styled.div``

const SubHeading = styled(H3)`
  text-align: center;

  // animation
  opacity: 0;
  animation: ${slideDown} 1s forwards;
`

const TextBlock = styled.div`
  margin: auto;
  max-width: 1080px; // ?
  padding: 0px 20px;
  margin: 40px auto;

  // animation
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
`

const Text = styled(BodyMain)`
  text-align: left;
`

const AnimalCards = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  gap: 40px;
  grid-template-columns: auto auto auto auto;
`
