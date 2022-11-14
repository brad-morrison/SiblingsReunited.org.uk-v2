import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { MediumText } from "../styles/TextStyles"
import { VscTriangleDown } from "react-icons/vsc"

export default function MenuItem(props) {
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const [itemsExist, setItemsExist] = useState(false)

  // dropdown menu component
  const dropDown = dropDownMenu()
  const title = BuildTitle()

  // checks once on render if the item has subtitles
  useEffect(() => {
    if (props.item.items.length > 0) {
      setItemsExist(true)
    }
  }, [])

  return (
    <Wrapper>
      <MenuItemWrapper onMouseLeave={() => setDropDownOpen(false)}>
        <Link to={props.item.link}>{title}</Link>
        {dropDown}
      </MenuItemWrapper>
    </Wrapper>
  )

  // Drop Menu Component
  // returns nothing if no subtitles exist
  function dropDownMenu() {
    if (itemsExist) {
      return (
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
      )
    }
  }

  // Title Component
  // checks if the item has subtitles and adds a triangle icon if its does
  function BuildTitle() {
    if (itemsExist) {
      return (
        <MenuTitle
          onMouseOver={() => setDropDownOpen(true)}
          itemsExist={itemsExist}
        >
          {props.item.title}
          <VscTriangleDown className="arrowIcon" />
        </MenuTitle>
      )
    } else {
      return (
        <MenuTitle
          onMouseOver={() => setDropDownOpen(true)}
          itemsExist={itemsExist}
        >
          {props.item.title}
        </MenuTitle>
      )
    }
  }
}

const Wrapper = styled.div``

const MenuItemWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100%;
`

const MenuTitle = styled(MediumText)`
  position: relative;
  align-self: center;
  justify-content: center;
  align-content: center;
  font-weight: bold;
  border-bottom: 3px solid ${themes.background};
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: flex;
  gap: 5px;
  margin-right: ${props => (props.itemsExist ? "15px" : "0px")};
  padding-bottom: 0px;

  .arrowIcon {
    position: absolute;
    right: -20px;
    top: 3px;
    transform: rotateZ(-90deg);
    color: ${themes.purple};

    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    border-bottom: 3px solid ${themes.purple};
    padding-bottom: 6px;

    .arrowIcon {
      color: ${themes.purple};
      transform: rotateZ(0);
    }
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

  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
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
