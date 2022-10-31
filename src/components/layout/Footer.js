import React from "react"
import styled from "styled-components"
import { MediumText, SmallText } from "../styles/TextStyles"

function Footer() {
  return (
    <Wrapper>
      <ContentWrapper>
        <FooterContent>
          <LogoWrapper>
            <Logo></Logo>
          </LogoWrapper>
          <TextContent>
            <Column>
              <ColumnTitle>SiteMap</ColumnTitle>
              <ColumnItem>Fundraising</ColumnItem>
              <ColumnItem>Volunteering</ColumnItem>
              <ColumnItem>About us</ColumnItem>
              <ColumnItem>Contact</ColumnItem>
              <ColumnItem>Child Page</ColumnItem>
              <ColumnItem>Store</ColumnItem>
            </Column>
            <Column>
              <ColumnTitle>Useful links</ColumnTitle>
              <ColumnItem>Frequently asked questions</ColumnItem>
              <ColumnItem>Map</ColumnItem>
              <ColumnItem>Contact details</ColumnItem>
              <ColumnItem>Media centre</ColumnItem>
              <ColumnItem>Partners</ColumnItem>
              <ColumnItem>Funders</ColumnItem>
            </Column>
            <Column>
              <ColumnTitle>Legal links</ColumnTitle>
              <ColumnItem>Privacy policy</ColumnItem>
              <ColumnItem>Cookies policy</ColumnItem>
              <ColumnItem>Terms of use</ColumnItem>
              <ColumnItem>Fair fundraising</ColumnItem>
            </Column>
          </TextContent>
        </FooterContent>
        <BottomText>
          Registered charity in the UK and Scotland at 22 Back Lebanon, Cupar,
          Fife, KY15 4JW.
        </BottomText>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  display: grid;
`

const ContentWrapper = styled.div`
  background-color: #1d1d1b;
  min-height: 300px;
  padding: 0 80px;
`

const LogoWrapper = styled.div`
  position: relative;
  max-height: 200px;
  padding: 50px 50px;
  width: 100%;
  justify-self: center;
`

const Logo = styled.div`
  height: 100%;
  width: 100%;
  background: url("/logo-white.svg");
  background-size: contain;
  background-repeat: no-repeat;
`

const TextContent = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 60px;
  gap: 30px;
  justify-content: start;
`

const Column = styled.div``

const ColumnTitle = styled(MediumText)`
  color: white;
  margin-bottom: 16px;
  font-weight: bold;
`

const ColumnItem = styled(MediumText)`
  margin-bottom: 12px;
  color: white;
  opacity: 70%;
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 30px 30px;
`

const BottomText = styled(SmallText)`
  padding: 30px 30px;
  background-color: #1d1d1b;
  color: white;
  opacity: 50%;
`
