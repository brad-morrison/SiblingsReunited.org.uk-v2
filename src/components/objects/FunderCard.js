import React from "react"
import styled from "styled-components"

function FunderCard(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <Logo src={props.logo}></Logo>
      </ContentWrapper>
    </Wrapper>
  )
}

export default FunderCard

const Wrapper = styled.div`
  background-color: white;
  display: grid;
  padding: 15px 40px;
  gap: 10px;
  vertical-align: middle;
  justify-content: center;
  align-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: translateY(-10px);
    cursor: pointer;
    box-shadow: 0px 14px 4px rgba(0, 0, 0, 0.03);
  }
`

const ContentWrapper = styled.div``

const Logo = styled.img`
  width: 200px;
  object-fit: fit;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  //filter: grayscale(0);

  :hover {
    //filter: grayscale(1);
  }
`
