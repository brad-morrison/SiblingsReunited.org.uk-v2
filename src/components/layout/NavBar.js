import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import Button from "../objects/Button"
import { themes } from "../styles/ColorStyles"
import { BodyIntro, Caption, Caption2, MediumText } from "../styles/TextStyles"
import { menuData } from "../../data/SiteData"
import MenuItem from "./MenuItem"
import { breaks } from "../styles/BreakStyles"
import { AnchorLink } from "gatsby-plugin-anchor-links"

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
        {/*}
        <Link
          to="/ChildPage
        "
        >
          <SecondaryContent>View our child friendly page</SecondaryContent>
        </Link>
          */}
      </SecondaryBar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  max-width: 100%;
  background-color: ${themes.background};
  z-index: 55;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  max-width: 1400px;
  margin: auto;
`

const LogoWrapper = styled.div`
  position: relative;
  height: 100px;
  padding: 10px 30px;

  @media (max-width: ${breaks.phone}) {
    height: 80px;
  }
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
  align-content: stretch;
  align-items: center;
  gap: 30px;
  //padding: 0 0px;
  height: 100%;
  min-height: 100%;

  // nav links
  a {
    align-self: center;
    text-decoration: none;
    color: ${themes.text1};
  }

  @media (max-width: ${breaks.tablet}) {
    visibility: hidden;
    background-color: blue;
    opacity: 0;
  }
`

const SecondaryBar = styled.div`
  width: 100%;
  margin: auto;
  background-color: ${themes.purple};
  height: 20px;
  z-index: 56;
`

const SecondaryContent = styled(Caption)`
  color: white;
  text-align: right;
  max-width: 1400px;
  margin: auto;
  padding: 8px 30px;
`
