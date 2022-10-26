import React from "react"
import styled from "styled-components"
import SocialMediaButton from "./SocialMediaButton"

function SocialMediaBar() {
  const buttonSize = "50px"
  return (
    <Wrapper>
      <ContentWrapper>
        <SocialMediaButton type="inst.svg" width={buttonSize} />
        <SocialMediaButton type="face.svg" width={buttonSize} />
        <SocialMediaButton type="twit.svg" width={buttonSize} />
      </ContentWrapper>
    </Wrapper>
  )
}

export default SocialMediaBar

const Wrapper = styled.div`
  overflow: hidden;
  border-radius: 50px;
  box-shadow: 0px 7px 22px rgba(0, 0, 0, 0.25);
`

const ContentWrapper = styled.div`
  display: grid;
  gap: 8px;

  width: fit-content;
  background-color: white;
  padding: 10px;
`
