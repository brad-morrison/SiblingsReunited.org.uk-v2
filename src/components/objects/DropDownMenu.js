import React, { useState } from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { MediumText } from "../styles/TextStyles"

function DropDownMenu(props) {
  //const { isOpen } = props //this deconstructs the props for use in this component
  //const data = props

  return (
    <Wrapper isOpen={props.isOpen}>
      <ContentWrapper>
        <Items>
          {props.subTitles.map((item, index) => (
            <p>{item}</p>
          ))}
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
  opacity: ${props => (props.isOpen ? 1 : 0)};
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
