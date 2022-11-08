import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { MediumText } from "../styles/TextStyles"

export default function MenuItem(props) {
  const [dropDownOpen, setDropDownOpen] = useState(false)

  return (
    <Wrapper>
      <MenuItemWrapper onMouseLeave={() => setDropDownOpen(false)}>
        <Link to={props.item.link}>
          <MenuTitle onMouseOver={() => setDropDownOpen(true)}>
            {props.item.title}
          </MenuTitle>
        </Link>
        <DropDownMenuWrapper>
          <DropDownMenu
            dropDownOpen={dropDownOpen}
            onMouseLeave={() => setDropDownOpen(false)}
          >
            {props.item.items.map((item, index) => (
              <DropDownText dropDownOpen={dropDownOpen}>
                {item.title}
              </DropDownText>
            ))}
          </DropDownMenu>
        </DropDownMenuWrapper>
      </MenuItemWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const MenuItemWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100%;
`

const MenuTitle = styled(MediumText)`
  align-self: center;
  justify-content: center;
  align-content: center;
  font-weight: bold;
  border-bottom: 3px solid ${themes.background};
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    border-bottom: 3px solid ${themes.purple};
    transform: translateY(-5px);
  }
`

const DropDownMenuWrapper = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
`

const DropDownMenu = styled(MediumText)`
  visibility: ${props => (props.dropDownOpen ? "visible" : "hidden")};
  position: absolute;
  display: grid;
  gap: 16px;
  min-width: 120px;
  transform: translateY(10px);

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: ${props => (props.dropDownOpen ? 100 : 1)};
  background-color: ${themes.background};
  border: 0.5px lightgray solid;
  padding: 20px;
  border-radius: 20px;

  opacity: ${props => (props.dropDownOpen ? 1 : 0)};
  box-shadow: 0px 15px 22px rgba(0, 0, 0, 0.15);
`

const DropDownText = styled(MediumText)`
  visibility: ${props => (props.dropDownOpen ? "visible" : "hidden")};
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 50;
  :hover {
    transform: translateX(5px);
    color: ${themes.purple};
    cursor: pointer;
  }
`
