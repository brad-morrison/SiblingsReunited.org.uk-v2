import React from "react"
import styled, { keyframes } from "styled-components"
import { H3, BodyMain } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import Gallery from "./Gallery"
import Block from "../objects/Block"
import BlockText from "../objects/BlockText"
import { slideDown } from "../styles/Animations"

export default function Events() {
  return (
    <LazyLoad>
      <Wrapper>
        <BlockText
          animation="slideUp"
          title="Our Seasonal Events"
          titleAlign="center"
          text="We have lots of special animals here at STAR Siblings Reunited. We have lots of special animals here at STAR Siblings Reunited. We have lots of special animals here at STAR Siblings Reunited."
        />
        <ContentWrapper>
          <Gallery />
        </ContentWrapper>
      </Wrapper>
    </LazyLoad>
  )
}

const Wrapper = styled.div`
  // animations
  opacity: 0;
  animation: ${slideDown} 1s forwards;
`

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
