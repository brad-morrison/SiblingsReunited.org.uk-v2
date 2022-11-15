import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import Button from "../objects/Button"
import { themes } from "../styles/ColorStyles"
import { BodyIntro, H2, H3, H4, MediumText } from "../styles/TextStyles"

export default function SideMenuItem(props) {
  return (
    <Wrapper>
      <Link to={props.link} onClick={props.sideMenuControl}>
        <Item>{props.title}</Item>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-width: 380px;
`
const Item = styled(H4)`
  color: white;
  opacity: 90%;
  padding-left: 0px;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    cursor: pointer;
    padding-left: 10px;
    opacity: 100%;
  }
`

const Back = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
`
