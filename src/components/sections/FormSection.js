import * as React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Button from "../objects/Button"
import { themes } from "../styles/ColorStyles"
import {
  BodyIntro,
  BodyMain,
  Caption,
  H1,
  H2,
  H3,
  H4,
  SmallText,
  SmallText2,
} from "../styles/TextStyles"
import Form from "../objects/Form"

export default function FormSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Form></Form>
        <FormInfo>
          <Title>We'd love to hear from you!</Title>
          <SubTitle>
            We aim to respond to your enquiry within 24 hours.
          </SubTitle>
        </FormInfo>
      </ContentWrapper>
    </Wrapper>
  )
}

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
`

// right section
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
`

const Title = styled(H3)``

const SubTitle = styled(BodyMain)``
