import React from "react"
import styled from "styled-components"

function NavBar() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Logo />
        <Items>
          <Item>Home</Item>
          <Item>About us</Item>
          <Item>What we do</Item>
          <Item>Contact</Item>
          <Item>Help</Item>
          <Item>Shop</Item>
          <Item>Fundraising</Item>
        </Items>
      </ContentWrapper>
    </Wrapper>
  )
}

export default NavBar

const Wrapper = styled.div`
  width: 100%;
`

const ContentWrapper = styled.div``

const Logo = styled.div`
  object-fit: fit;
  width: 225px;
  height: 112px;
  background: url("/logo.svg");
  justify-content: center;
  align-content: center;
`

const Items = styled.div``

const Item = styled.p``
