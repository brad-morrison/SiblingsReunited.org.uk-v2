import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import Button from "../objects/Button"
import DropDownMenu from "../objects/DropDownMenu"
import { themes } from "../styles/ColorStyles"
import { BodyIntro, Caption, Caption2, MediumText } from "../styles/TextStyles"

const menuData = [
  { title: "Home", link: "/", subTitles: ["1", "2", "3", "4"] },
  { title: "About us", link: "/AboutUs", subTitles: ["1", "2", "3", "4"] },
  { title: "What we do", link: "/WhatWeDo", subTitles: ["1", "2", "3", "4"] },
  { title: "Store", link: "/Store", subTitles: ["1", "2", "3", "4"] },
  {
    title: "Fundraising",
    link: "/Fundraising",
    subTitles: ["1", "2", "3", "4"],
  },
  { title: "Volunteer", link: "/Volunteer", subTitles: ["1", "2", "3", "4"] },
  { title: "Contact", link: "/Contact", subTitles: ["1", "2", "3", "4"] },
]

export default function NavBar() {
  const [dropDownOpen, setDropDownOpen] = useState(false)

  return (
    <Wrapper>
      <button onClick={() => setDropDownOpen(!dropDownOpen)}>
        {dropDownOpen ? "open" : "closed"}
      </button>
      <DropDownMenu isOpen={dropDownOpen} />
      <ContentWrapper>
        <LogoWrapper>
          <Link to="/">
            <Logo />
          </Link>
        </LogoWrapper>
        <Items>
          {menuData.map((item, index) => (
            <Link to={item.link} key={index}>
              <Item>{item.title}</Item>
              <DropDownMenu
                isOpen={dropDownOpen}
                dropDownItems={[item.subTitles]}
              ></DropDownMenu>
            </Link>
          ))}
          <Button text="Donate"></Button>
        </Items>
      </ContentWrapper>
      <SecondaryBar>
        <Link to="/">
          <SecondaryContent>View our child friendly page</SecondaryContent>
        </Link>
      </SecondaryBar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  //width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  background-color: ${themes.background};
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
`

const LogoWrapper = styled.div`
  position: relative;
  height: 100px;
  padding: 10px 30px;
`

const Logo = styled.div`
  height: 100%;
  background: url("./images/logos/logo.svg");
  background-size: contain;
  background-repeat: no-repeat;
`

const Items = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  justify-content: end;
  align-content: center;
  gap: 30px;
  padding: 0 30px;

  // nav links
  a {
    align-self: center;
    text-decoration: none;
    color: ${themes.text1};
  }
`

const Item = styled(MediumText)`
  align-self: center;
  font-weight: bold;
  border-bottom: 3px solid ${themes.background};
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    border-bottom: 3px solid ${themes.purple};
    transform: translateY(-5px);
  }
`

const SecondaryBar = styled.div`
  width: 100%;
  background-color: ${themes.purple};
  height: auto;
`

const SecondaryContent = styled(Caption)`
  color: white;
  text-align: right;
  padding: 8px 30px;
`
