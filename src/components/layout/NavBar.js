import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import Button from "../objects/Button"
import { themes } from "../styles/ColorStyles"
import { BodyIntro, Caption, Caption2, MediumText } from "../styles/TextStyles"
import { menuData } from "../../data/SiteData"
import MenuItem from "./MenuItem"

export default function NavBar() {
  return (
    <Wrapper>
      <ContentWrapper>
        <LogoWrapper>
          <Link to="/">
            <Logo />
          </Link>
        </LogoWrapper>
        <Items>
          {menuData.map((item, index) => (
            <MenuItem key={index} item={item} />
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
