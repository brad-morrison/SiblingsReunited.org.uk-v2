import React from "react"
import styled, { keyframes } from "styled-components"
import SiteBlock from "../objects/SiteBlock"
import { H3 } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import Spacer from "../layout/Spacer"

export default function OurSiteSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <LazyLoad>
            <SubHeading id="our-site">Our amazing site</SubHeading>
        </LazyLoad>
        <SiteBlock
          title="Woods"
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        ></SiteBlock>
        <SiteBlock
          title="Polytunnel"
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          flipped="1"
        ></SiteBlock>
        <SiteBlock
          title="Stables"
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        ></SiteBlock>
        <SiteBlock
          title="Wigwam"
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          flipped="1"
        ></SiteBlock>
        <SiteBlock
          title="BBQ Hut"
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        ></SiteBlock>
        <SiteBlock
          title="Outdoor Kitchen"
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          flipped="1"
        ></SiteBlock>
      </ContentWrapper>
    </Wrapper>
  )
}

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); filter: blur(10px)}
  to { opacity: 1;  transform: translateY(0px);  filter: blur(0px)}
`

const Wrapper = styled.div``

const ContentWrapper = styled.div`
    display: grid;
    gap: 80px;
`

const SubHeading = styled(H3)`
  text-align: center;

  // animation
  opacity: 0;
  animation: ${slideDown} 1s forwards;
`
