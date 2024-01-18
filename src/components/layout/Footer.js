import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { MediumText, SmallText } from "../styles/TextStyles"

function Footer() {
  return (
    <Wrapper>
      <ContentWrapper>
        <FooterContent>
          <LogoWrapper>
            <Link to="/">
              <Logo />
            </Link>
          </LogoWrapper>
          <TextContent>
            <Column>
              <ColumnTitle>SiteMap</ColumnTitle>
              <Link to="/Fundraising">
                <ColumnItem>Fundraising</ColumnItem>
              </Link>
              <Link to="/Fundraising">
                <ColumnItem>Volunteering</ColumnItem>
              </Link>
              <Link to="/Fundraising">
                <ColumnItem>About us</ColumnItem>
              </Link>
              <Link to="/Fundraising">
                <ColumnItem>Contact</ColumnItem>
              </Link>
              <Link to="/Fundraising">
                <ColumnItem>Child Page</ColumnItem>
              </Link>
              <Link to="/Fundraising">
                <ColumnItem>Store</ColumnItem>
              </Link>
            </Column>
            <Column>
              <ColumnTitle>Useful links</ColumnTitle>
              <Link to="/Fundraising">
                <ColumnItem>Frequently asked questions</ColumnItem>
              </Link>
              <Link to="/Fundraising">
                <ColumnItem>Map</ColumnItem>
              </Link>
              <Link to="/Fundraising">
                <ColumnItem>Contact details</ColumnItem>
              </Link>
              <Link to="/Fundraising">
                <ColumnItem>Media centre</ColumnItem>
              </Link>
              <Link to="/Fundraising">
                <ColumnItem>Partners</ColumnItem>
              </Link>
              <Link to="/Fundraising">
                <ColumnItem>Funders</ColumnItem>
              </Link>
            </Column>
            <Column>
              <ColumnTitle>Legal links</ColumnTitle>
              <Link to="/Fundraising">
                <ColumnItem>Privacy policy</ColumnItem>
              </Link>
              <Link to="/Fundraising">
                <ColumnItem>Cookies policy</ColumnItem>
              </Link>
              <Link to="/Fundraising">
                <ColumnItem>Terms of use</ColumnItem>
              </Link>
              <Link to="/Fundraising">
                <ColumnItem>Fair fundraising</ColumnItem>
              </Link>
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
  background-color: ${themes.darkBackground};
`

const ContentWrapper = styled.div`
  min-height: 300px;
  padding: 0 80px;
  max-width: 1400px;
  margin: auto;
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
  background: url("/images/logos/Logo-white.png");
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
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    opacity: 100%;
  }
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
