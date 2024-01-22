import * as React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { BodyMain, H3 } from "../styles/TextStyles"
import Form from "../objects/Form"
import { breaks } from "../styles/BreakStyles"
import LazyLoad from "react-lazy-load"

export default function FormSection() {
  return (
    <LazyLoad>
      <Wrapper>
        <ContentWrapper>
          <FormInfo>
            <Title>We'd love to hear from you!</Title>
            <SubTitle>
              We aim to respond to your enquiry within 24 hours.
            </SubTitle>
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
  border: 0.5px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 7px 22px rgba(0, 0, 0, 0.1);
  padding: 50px;
  display: grid;
  justify-content: start;
  align-content: start;
  gap: 40px;

  // animations
  opacity: 0;
  animation: ${slideLeft} 1s forwards;
`

const Title = styled(H3)``

const SubTitle = styled(BodyMain)``
