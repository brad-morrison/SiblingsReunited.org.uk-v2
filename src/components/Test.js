import React from "react"
import styled from "styled-components"
import { H1, H4 } from "./styles/TextStyles"

export default function Test() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Text>HELLO THERE THIS IS A TEST</Text>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const ContentWrapper = styled.div`
  width: 100%;

  height: 300px;
  background-color: gray;
  display: grid;
  justify-content: center;
  align-content: center;
`

const Text = styled(H4)`
  color: white;
  text-align: center;
`
