import React from "react"
import styled, { keyframes } from "styled-components"
import Button from "../objects/Button"
import Spline from "@splinetool/react-spline"
import { themes } from "../styles/ColorStyles"
import { H3, H4, BodyMain } from "../styles/TextStyles"
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
              <div>
                <Spline scene="https://prod.spline.design/oSt-U9ICTRCUU3jn/scene.splinecode" />
              </div>
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
  padding: 30px;
  margin: 10px auto;
  height: 500px;

  //background-color: ${themes.secondaryBackground};
  align-content: center;
`

const TextSection = styled.div`
  display: grid;
  background-color: white;
  padding: 40px 40px;
  max-height: 340px;
  gap: 40px;
  border: 0.5px lightgray solid;
  //border-radius: 30px;
  box-shadow: 0px 7px 22px rgba(0, 0, 0, 0.2);

  // animations
  opacity: 0;
  animation: ${slideLeft} ${speed} forwards;
`

const SubHeading = styled(H3)`
  text-align: center;

  //animation
  opacity: 0;
  animation: ${zoomIn} ${speed} forwards;
`

const MediaSection = styled.div`
  // animations
  opacity: 0;
  animation: ${slideRight} ${speed} forwards;
`

const Title = styled(H4)``

const Text = styled(BodyMain)``

const ButtonWrapper = styled.div`
  display: grid;
  justify-content: center;
  transform: translateY(-10px);
`
