import React from "react"
import styled from "styled-components"
import { H3, BodyMain } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"

export default function SeasonalEventsSection() {
  return (
    <LazyLoad>
    <Wrapper>
        <SubHeading id="events">Our Seasonal Events</SubHeading>
        <ContentWrapper>
            <TextBlock>
                <Text>
                We have lots of special animals here at STAR Siblings Reunited. We
                have lots of special animals here at STAR Siblings Reunited. We have
                lots of special animals here at STAR Siblings Reunited.
                </Text>
            </TextBlock>
      </ContentWrapper>
    </Wrapper>
    </LazyLoad>
  )
}

const Wrapper = styled.div``

const ContentWrapper = styled.div`
    display: grid;
    gap: 50px;
    margin-bottom: 50px;
`

const SubHeading = styled(H3)`
  text-align: center;
  margin-bottom: 50px;
`

const TextBlock = styled.div`
  margin: auto;
  max-width: 1080px; // ?
  padding: 0px 20px;
  margin: 0 auto;
`

const Text = styled(BodyMain)`
  text-align: left;
`