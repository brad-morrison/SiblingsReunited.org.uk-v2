import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Button from "../objects/Button"
import SideMenuItem from "../objects/SideMenuItem"
import { breaks } from "../styles/BreakStyles"
import { themes } from "../styles/ColorStyles"
import { MediumText } from "../styles/TextStyles"
import { menuData } from "../../data/SiteData"
import useScrollBlock from "../../utilities/useScrollBlock"

export default function SideMenu() {
  const [sideMenuOpen, set_sideMenuOpen] = useState(false)
  const [blockScroll, allowScroll] = useScrollBlock()

  useEffect(() => {
    // This set scrollBlock to false at page load
    if (sideMenuOpen) {
      blockScroll()
    } else {
      allowScroll()
    }
  })

  function handleClick(event) {
    set_sideMenuOpen(!sideMenuOpen)
  }

  return (
    <>
      <Back sideMenuOpen={sideMenuOpen}></Back>
      <Wrapper sideMenuOpen={sideMenuOpen}>
        <ContentWrapper>
          <ButtonWrapper onClick={event => handleClick(event)}>
            <Button text="X"></Button>
          </ButtonWrapper>
          <SidePanel>
            <Items>
              {menuData.map((item, index) => (
                <SideMenuItem
                  key={index}
                  title={item.title}
                  link={item.link}
                  sideMenuControl={handleClick}
                />
              ))}
            </Items>
          </SidePanel>
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

const Back = styled.div`
  background-color: black;
  opacity: 0%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 400;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  visibility: hidden;
  display: none;

  @media (max-width: ${breaks.tablet}) {
    opacity: ${props => (props.sideMenuOpen ? "50%" : "0%")};
    visibility: visible;
    display: block;
  }
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  right: ${props => (props.sideMenuOpen ? "-80px" : "-480px")};
  z-index: 500;

  @media (min-width: ${breaks.tablet}) {
    display: none;
    visibility: hidden;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: start;
`

const SidePanel = styled.div`
  background-color: ${themes.purple};
  height: 100%;
`

const Items = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 24px;
  padding: 50px;
`

const Item = styled(MediumText)``

const ButtonWrapper = styled.div`
  display: grid;
  justify-content: start;
  align-content: start;
  padding: 20px;
  display: none;

  @media (max-width: ${breaks.tablet}) {
    display: block;
  }
`
