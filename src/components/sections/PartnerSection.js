import React from "react"
import styled from "styled-components"
import FunderCard from "../objects/FunderCard"
import { breaks } from "../styles/BreakStyles"
import { themes } from "../styles/ColorStyles"
import { BodyIntro } from "../styles/TextStyles"

function PartnerSection(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <MainTitle>{props.title}</MainTitle>
        <FunderCards>
          <FunderCard logo="/images/logos/afka.png" />
          <FunderCard logo="/images/logos/sufs.png" />
          <FunderCard logo="/images/logos/promise.png" />
          <FunderCard logo="/images/logos/corra.png" />
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
  //padding: 30px 30px;
`

const FunderCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`

const MainTitle = styled(BodyIntro)`
  text-align: center;
`
