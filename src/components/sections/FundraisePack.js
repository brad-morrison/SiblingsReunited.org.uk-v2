import React from "react"
import styled, { keyframes } from "styled-components"
import Button from "../objects/Button"
import Spline from "@splinetool/react-spline"
import { themes } from "../styles/ColorStyles"
import { H3, H4, BodyMain, H2 } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import animations, {
  slideLeft,
  slideRight,
  speed,
  zoomIn,
} from "../styles/Animations"

export default function FundraisePack() {
  return (
    <LazyLoad>
      <Wrapper>
        <SubHeading id="fundraising-pack">
          Download our fundraising pack
        </SubHeading>
        <LazyLoad>
          <ContentWrapper>
            <TextSection>
              <Title>
                Our fundraising pack has everything you need to start a
                fundraiser
              </Title>
              <Text>
                Our pack contains our logo, leaflet, flyer and a fundraising
                form. We also threw in a few extras such as stickers and bunting
                print-outs.
              </Text>
              <ButtonWrapper>
                <Button text="Download our pack"></Button>
              </ButtonWrapper>
            </TextSection>
            <MediaSection>
              <Box>
                <Spline scene="https://prod.spline.design/oSt-U9ICTRCUU3jn/scene.splinecode" />
              </Box>
            </MediaSection>
          </ContentWrapper>
        </LazyLoad>
      </Wrapper>
    </LazyLoad>
  )
}

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  margin: 10px auto;
  overflow: hidden;

  //background-color: ${themes.secondaryBackground};
  align-content: center;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const TextSection = styled.div`
  display: grid;
  background-color: white;
  padding: 40px 40px;
  gap: 40px;
  border: 0.5px lightgray solid;
  height: 100%;
  //border-radius: 30px;
  box-shadow: 0px 7px 22px rgba(0, 0, 0, 0.2);
  align-content: space-around;

  // animations
  opacity: 0;
  animation: ${slideLeft} ${speed} forwards;

  @media (max-width: 1100px) {
    order: 2;
  }
`

const MediaSection = styled.div`
  width: 600px;
  position: relative;
  height: 330px;
  overflow: hidden;
  justify-content: center;
  margin: auto;

  //margin-top: 2rem;

  // animations
  opacity: 0;
  animation: ${slideRight} ${speed} forwards;
`

const Box = styled.div`
  position: absolute;
  width: 100%;
  //top: 0;
  //bottom: 0;
`

const Title = styled(H2)``

const Text = styled(BodyMain)``

const ButtonWrapper = styled.div``

const SubHeading = styled(H2)`
  text-align: center;

  //animation
  opacity: 0;
  animation: ${zoomIn} ${speed} forwards;
`
