import React, { useState } from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { MediumText } from "../styles/TextStyles"

function DropDownMenu() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Items>
          <Item>Meet the team</Item>
          <Item>Why we exist</Item>
          <Item>Find out more</Item>
          <Item>In the news</Item>
        </Items>
      </ContentWrapper>
    </Wrapper>
  )
}

export default DropDownMenu

const Wrapper = styled.div`
  position: absolute;
  z-index: 5;
  background-color: ${themes.secondaryBackground};
  padding: 8px;
  width: fit-content;
  border-radius: 25px;
  border: 0.5px lightgray solid;
`

const ContentWrapper = styled.div`
  padding: 20px;
  width: fit-content;
`

const Items = styled.div`
  display: grid;
  gap: 16px;
`

const Item = styled(MediumText)`
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    cursor: pointer;
    transform: translateX(5px);
  }
`
