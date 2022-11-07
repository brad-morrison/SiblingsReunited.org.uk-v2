import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { MediumText } from "../styles/TextStyles"
import { menuData } from "../../data/SiteData"

export default function MenuItem(props) {
  const [dropDownOpen, setDropDownOpen] = useState(false)

  return (
    <Wrapper>
      <Link to={props.item.link}>
        <Item
          onMouseOver={() => setDropDownOpen(true)}
          onMouseLeave={() => setDropDownOpen(false)}
        >
          {props.item.title}
        </Item>
        <Items
          dropDownOpen={dropDownOpen}
          onMouseOver={() => setDropDownOpen(true)}
          onMouseLeave={() => setDropDownOpen(false)}
        >
          <DropDownMenu>
            {props.item.items.map((item, index) => (
              <DropDownText>{item.title}</DropDownText>
            ))}
          </DropDownMenu>
        </Items>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: auto;
`

const Items = styled.div`
  opacity: ${props => (props.dropDownOpen ? 1 : 0)};
  align-content: center;
`

const Item = styled(MediumText)`
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

const DropDownMenu = styled(MediumText)`
  position: absolute;
  z-index: 5;
  background-color: ${themes.secondaryBackground};
  padding: 8px;
  width: fit-content;
  border-radius: 25px;
  border: 0.5px lightgray solid;
  display: grid;
  gap: 16px;
  padding: 20px;
  width: fit-content;
`

const DropDownText = styled(MediumText)`
  align-self: center;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: translateX(5px);
  }
`
