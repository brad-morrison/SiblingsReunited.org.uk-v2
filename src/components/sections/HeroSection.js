import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            STAR <br /> Siblings Reunited
          </Title>
          <Description>
            Sint enim aliqua exercitation aliqua velit irure velit. Velit eu
            laborum anim cupidatat ipsum veniam velit dolor laborum velit
            ullamco veniam.
          </Description>
        </TextWrapper>
        <TextWrapper>
          <Title>
            STAR <br /> Siblings Reunited
          </Title>
          <Description>
            Sint enim aliqua exercitation aliqua velit irure velit. Velit eu
            laborum anim cupidatat ipsum veniam velit dolor laborum velit
            ullamco veniam.
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  position: relative;
  background: linear-gradient(180deg, #00d2ff 0%, #3a7bd5 100%);
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

const TextWrapper = styled.div`
  max-width: 360px;
  padding: 200px 30px;

  display: grid;
  gap: 30px;
`

const Title = styled(H1)`
  color: white;
`

const Description = styled(MediumText)`
  color: white;
`
