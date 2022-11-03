import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Button from "../objects/Button"
import { themes } from "../styles/ColorStyles"
import { BodyIntro, Caption, Caption2, MediumText } from "../styles/TextStyles"

const menuData = [
  { title: "Home", link: "/" },
  { title: "About us", link: "/AboutUs" },
  { title: "What we do", link: "/WhatWeDo" },
  { title: "Store", link: "/Store" },
  { title: "Fundraising", link: "/Fundraising" },
  { title: "Volunteer", link: "/Volunteer" },
  { title: "Contact", link: "/Contact" },
]

function NavBar() {
  return (
    <Wrapper>
      <ContentWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Items>
          {menuData.map((item, index) => (
            <Link to={item.link} key={index}>
              <Item>{item.title}</Item>
            </Link>
          ))}
          <Button text="Donate"></Button>
        </Items>
      </ContentWrapper>
      <SecondaryBar>
        <SecondaryContent>View our child friendly page</SecondaryContent>
      </SecondaryBar>
    </Wrapper>
  )
}

export default NavBar

const Wrapper = styled.div`
  width: 100%;
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
