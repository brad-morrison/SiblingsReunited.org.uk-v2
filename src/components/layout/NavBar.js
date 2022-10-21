import React from "react"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"

function NavBar() {
  return (
    <Wrapper>
      <ContentWrapper></ContentWrapper>
    </Wrapper>
  )
}

export default NavBar

const Wrapper = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 11px 39px;

  width: 100%;
  height: 134px;

  //background: #ffffff;
  background: green;
`

const ContentWrapper = styled.div`
  max-width: 980px;
  margin: 100px auto;
  padding: 0 20px;

  display: grid;
  grid-template-columns: 500px auto;
  gap: 0px;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    gap: 30px;
  }
`
