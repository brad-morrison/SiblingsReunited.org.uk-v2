import React from "react"
import styled from "styled-components"

function SocialMediaButton(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <RoundButton src={props.type} width={props.width}></RoundButton>
      </ContentWrapper>
    </Wrapper>
  )
}

export default SocialMediaButton

const Wrapper = styled.div`
  background-color: ${props => props.color};
`

const ContentWrapper = styled.div``

const RoundButton = styled.img`
  width: ${props => (props.width ? props.width : "80px")};
  box-shadow: 0px 13px 30px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    box-shadow: 0px 13px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    cursor: pointer;
  }
`
