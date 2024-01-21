import React from "react"
import styled, { keyframes } from "styled-components"
import Button from "../objects/Button"
import Spline from "@splinetool/react-spline"
import { themes } from "../styles/ColorStyles"
import { H3, H4, BodyMain } from "../styles/TextStyles"

export default function FundraisePackSection() {
  return (
    <Wrapper>
        <SubHeading id="fundraising-pack">
            Download our fundraising pack
        </SubHeading>
        <ContentWrapper>
            <TextSection>
                <Title>
                    Our fundraising pack has everything you need to start a fundraiser
                </Title>
                <Text>
                    Our pack contains our logo, leaflet, flyer and a fundraising form.
                    We also threw in a few extras such as stickers and bunting
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
    </Wrapper>
  )
}

// animations
const slideLeft = keyframes`
  from { opacity: 0; transform: translateX(-300px); filter: blur(10px)}
  to { opacity: 1;  transform: translateX(0px);  filter: blur(0px)}
`

const slideRight = keyframes`
  from { opacity: 0;  transform: translateX(300px); filter: blur(10px); }
  to { opacity: 1;   transform: translateX(0px);  filter: blur(0px)}
`

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
    animation: ${slideLeft} 1s forwards;
`


const SubHeading = styled(H3)`
  text-align: center;
`

const MediaSection = styled.div`
    // animations
    opacity: 0;
    animation: ${slideRight} 1s forwards;
`

const Title = styled(H4)``

const Text = styled(BodyMain)``

const ButtonWrapper = styled.div`
  display: grid;
  justify-content: center;
  transform: translateY(-10px);
`