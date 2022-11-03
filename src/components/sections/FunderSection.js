import React from "react"
import styled from "styled-components"
import FunderCard from "../objects/FunderCard"
import { themes } from "../styles/ColorStyles"
import { BodyIntro } from "../styles/TextStyles"

function FunderSection(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <MainTitle>{props.title}</MainTitle>
        <FunderCards>
          <FunderCard logo="/images/logos/lottery.png" />
          <FunderCard logo="/images/logos/corra.png" />
        </FunderCards>
      </ContentWrapper>
    </Wrapper>
  )
}

export default FunderSection

const Wrapper = styled.div`
  background-color: ${themes.secondaryBackground};
`

const ContentWrapper = styled.div`
  margin: 20px auto;
  padding: 20px 30px;
`

const FunderCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

const MainTitle = styled(BodyIntro)`
  text-align: center;
  margin-bottom: 30px;
`
