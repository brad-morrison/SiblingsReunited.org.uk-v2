import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { MediumText } from "../styles/TextStyles"

function DropDownMenu() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Items>
          <Item>item 1</Item>
          <Item>item 2</Item>
          <Item>item 3</Item>
          <Item>item 4</Item>
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
  padding: 20px;
  width: fit-content;
`

const ContentWrapper = styled.div`
  padding: 20px;
  width: fit-content;
`

const Items = styled.div`
  display: grid;
  gap: 10px;
`

const Item = styled(MediumText)`
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    cursor: pointer;
    transform: translateX(5px);
  }
`
