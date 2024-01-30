import React from "react"
import styled, { keyframes } from "styled-components"
import SiteBlock from "../objects/SiteBlock"
import { H2, H3 } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import { slideDown, speed } from "../styles/Animations"

export default function OurSite() {
  return (
    <Wrapper>
      <ContentWrapper>
        <LazyLoad>
          <SubHeading id="our-site">Our amazing site</SubHeading>
        </LazyLoad>
        <SiteBlocks>
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
        </SiteBlocks>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const ContentWrapper = styled.div``

const SiteBlocks = styled.div`
  display: grid;
  gap: 150px;
`

const SubHeading = styled(H2)`
  text-align: center;
  margin-bottom: 3rem;

  // animation
  opacity: 0;
  animation: ${slideDown} ${speed} forwards;
`
