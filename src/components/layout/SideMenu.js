import React, { useState } from "react"
import styled from "styled-components"
import Button from "../objects/Button"
import { themes } from "../styles/ColorStyles"
import { MediumText } from "../styles/TextStyles"

export default function SideMenu() {
  const [sideMenuOpen, set_sideMenuOpen] = useState(true)
  const [rightSide, setRightSide] = useState(true)

  function handleClick(event) {
    set_sideMenuOpen(!sideMenuOpen)
    console.log("button pressed")
  }

  return (
    <Wrapper sideMenuOpen={sideMenuOpen}>
      <ContentWrapper>
        <ButtonWrapper onClick={event => handleClick(event)}>
          <Button text="X"></Button>
        </ButtonWrapper>
        <SidePanel>
          <Items>
            <Item>{sideMenuOpen ? "open" : "closed"}</Item>
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
            <Item>Four</Item>
          </Items>
        </SidePanel>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  right: ${props => (props.sideMenuOpen ? "-380px" : "0px")};
`

const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: start;
`

const SidePanel = styled.div`
  width: 380px;
  max-width: 380px;
  background-color: ${themes.purple};
  height: 100%;
`

const Items = styled.div`
  display: grid;
`

const Item = styled(MediumText)``

const ButtonWrapper = styled.div`
  display: grid;
  justify-content: start;
  align-content: start;
  padding: 20px;
`
