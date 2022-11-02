import React from "react"
import styled from "styled-components"
import FunderCard from "../objects/FunderCard"
import { themes } from "../styles/ColorStyles"
import { BodyIntro } from "../styles/TextStyles"

function PartnerSection(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <MainTitle>{props.title}</MainTitle>
        <FunderCards>
          <FunderCard logo="logo-1.png" />
          <FunderCard logo="logo-5.png" />
          <FunderCard logo="logo-4.png" />
          <FunderCard logo="logo-2.png" />
        </FunderCards>
      </ContentWrapper>
    </Wrapper>
  )
}

export default PartnerSection

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
