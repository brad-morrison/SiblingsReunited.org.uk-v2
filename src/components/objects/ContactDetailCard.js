import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { Caption } from "../styles/TextStyles"
import { FaEnvelope, FaFacebook, FaHome, FaMail, FaPhone } from "react-icons/fa"
import { breaks } from "../styles/BreakStyles"

export default function ContactDetailCard(props) {
  function Icon() {
    switch (props.icon) {
      case "home":
        return <FaHome />
        break
      case "mail":
        return <FaEnvelope />
        break
      case "phone":
        return <FaPhone />
        break
      case "facebook":
        return <FaFacebook />
        break
      default:
        return <h2>{props.icon[0].toUpperCase()}</h2>
        break
    }
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <IconWrapper>{Icon()}</IconWrapper>
        <Text>{props.text}</Text>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  background-color: ${themes.background};
  justify-content: start;
  align-content: center;
  padding: 20px;
  gap: 20px;
  border-radius: 30px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.08);

  @media (max-width: ${breaks.phone}) {
    border-radius: 0px;
  }

  :hover {
    cursor: pointer;
  }
`

const IconWrapper = styled.div`
  background-color: ${themes.purple};
  color: white;
  display: grid;
  justify-content: center;
  align-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  font-size: 30px;

  @media (max-width: ${breaks.phone}) {
    border-radius: 0px;
  }
`

const Text = styled(Caption)`
  align-self: center;
`
