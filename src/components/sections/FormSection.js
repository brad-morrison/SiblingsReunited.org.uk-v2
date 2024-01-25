import * as React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { BodyMain, H3, H4 } from "../styles/TextStyles"
import Form from "../objects/Form"
import { breaks } from "../styles/BreakStyles"
import LazyLoad from "react-lazy-load"
import Block from "../objects/Block"
import BlockText from "../objects/BlockText"

export default function FormSection() {
  return (
    <LazyLoad>
      <Wrapper>
        <Title>Get in Touch</Title>
        <ContentWrapper>
          <FormInfo>
            <BlockText
              title="We'd love to hear from you!"
              text="We aim to repond to your enquiry within 24 hours."
            />
          </FormInfo>
          <Form></Form>
        </ContentWrapper>
      </Wrapper>
    </LazyLoad>
  )
}

// animations
const slideLeft = keyframes`
  from { opacity: 0; transform: translateX(-80px); filter: blur(10px)}
  to { opacity: 1;  transform: translateX(0px);  filter: blur(0px)}
`

const slideRight = keyframes`
  from { opacity: 0;  transform: translateX(80px); filter: blur(10px); }
  to { opacity: 1;   transform: translateX(0px);  filter: blur(0px)}
`

const Wrapper = styled.div`
  max-width: 1300px;
  margin: auto;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  padding: 30px;
  gap: 30px;

  @media (max-width: ${breaks.tablet}) {
    grid-template-columns: auto;
  }
`

// left section
const FormInfo = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${themes.secondaryBackground};
  border: 0.5px solid rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  box-shadow: 0px 7px 22px rgba(0, 0, 0, 0.1);
  padding: 70px;
  display: grid;
  justify-content: start;
  align-content: start;
  gap: 40px;

  // animations
  opacity: 0;
  animation: ${slideLeft} 1s forwards;
`

const Title = styled(H4)`
  text-align: center;
  margin-bottom: 15px;
`

const SubTitle = styled(BodyMain)``
