import React from "react"
import styled, { keyframes } from "styled-components"
import SiteBlockCircle from "../objects/SiteBlockCircle"
import Button from "../objects/Button"
import { H3 } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"

export default function OurRolesSection() {
  return (
    <LazyLoad>
      <Wrapper>
        <SubHeading id="roles">Our Roles</SubHeading>
        <ContentWrapper>
          <SiteBlockCircle
            title="Contact Supervisor"
            text1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br><br>
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          ></SiteBlockCircle>
          <SiteBlockCircle
            flipped="1"
            title="General Volunteer"
            text1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br><br>
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          ></SiteBlockCircle>
          <SiteBlockCircle
            title="Contact Supervisor"
            text1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br><br>
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          ></SiteBlockCircle>
          <ButtonWrapper>
            <Button text="Enquire now"></Button>
          </ButtonWrapper>
        </ContentWrapper>
      </Wrapper>
    </LazyLoad>
  )
}

const zoomIn = keyframes`
  from { opacity: 0; transform: scale(0.8); filter: blur(10px)}
  to { opacity: 1;  transform: scale(1);  filter: blur(0px)}
`

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  display: grid;
  gap: 30px;
`

const SubHeading = styled(H3)`
  text-align: center;
`

const ButtonWrapper = styled.div`
  text-align: center;
  margin: auto;
  display: grid;
  justify-content: center;
  margin: 80px;
`
