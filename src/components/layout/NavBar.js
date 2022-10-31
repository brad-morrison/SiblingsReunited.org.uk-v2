import React from "react"
import styled from "styled-components"
import Button from "../objects/Button"
import { BodyIntro, Caption, Caption2, MediumText } from "../styles/TextStyles"

function NavBar() {
  return (
    <Wrapper>
      <ContentWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Items>
          <Item>Home</Item>
          <Item>About us</Item>
          <Item>What we do</Item>
          <Item>Contact</Item>
          <Item>Help</Item>
          <Item>Shop</Item>
          <Item>Fundraising</Item>
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
  background: url("/logo.svg");
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
`

const Item = styled(MediumText)`
  align-self: center;
  font-weight: bold;
`

const SecondaryBar = styled.div`
  width: 100%;
  background-color: #b28ad2;
  height: auto;
`

const SecondaryContent = styled(Caption)`
  color: white;
  text-align: right;
  padding: 8px 30px;
`
