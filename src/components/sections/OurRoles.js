import React from "react"
import styled, { keyframes } from "styled-components"
import Button from "../objects/Button"
import { H3 } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import Block from "../objects/Block"
import { speed, zoomIn } from "../styles/Animations"

export default function OurRoles() {
  return (
    <LazyLoad>
      <Wrapper>
        <SubHeading id="roles">Our Roles</SubHeading>
        <ContentWrapper>
          <Block
            animation="slideOut"
            title="Contact Supervisor"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                  <br><br>
                  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            image="/images/teacher.jpg"
            round={true}
          />
          <Block
            animation="slideIn"
            title="General Volunteer"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                  <br><br>
                  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            image="/images/teacher.jpg"
            round={true}
            flipped="1"
          />
          <Block
            animation="slideOut"
            title="Contact Supervisor"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                  <br><br>
                  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            image="/images/teacher.jpg"
            round={true}
          />
          <ButtonWrapper>
            <Button text="Enquire now"></Button>
          </ButtonWrapper>
        </ContentWrapper>
      </Wrapper>
    </LazyLoad>
  )
}

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  display: grid;
  gap: 30px;
`

const SubHeading = styled(H3)`
  text-align: center;

  //animation
  opacity: 0;
  animation: ${zoomIn} ${speed} forwards;
`

const ButtonWrapper = styled.div`
  text-align: center;
  margin: auto;
  display: grid;
  justify-content: center;
  margin: 80px;
`
