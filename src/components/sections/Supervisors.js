import React from "react"
import styled, { keyframes } from "styled-components"
import { H3, BodyMain } from "../styles/TextStyles"
import SupervisorCard from "../objects/SupervisorCard"
import LazyLoad from "react-lazy-load"
import Block from "../objects/Block"
import BlockText from "../objects/BlockText"
import { fadeIn, slideDown } from "../styles/Animations"

export default function Supervisors() {
  return (
    <LazyLoad>
      <Wrapper>
        <ContentWrapper>
          <BlockText
            title="...and our amazing supervisors"
            titleAlign="center"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
          <SupervisorCards>
            <SupervisorCard
              name="Claire Smith"
              role="Supervisor"
              image="/images/people/Claire.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              quote="Feugiat sed lectus vestibulum mattis ullamcorper velit. Sed enim ut sem viverra aliquet. Duis ultricies lacus sed turpis tincidunt id aliquet. Viverra nibh cras pulvinar mattis."
            ></SupervisorCard>
            <SupervisorCard
              name="Pete Melville"
              role="Supervisor"
              image="/images/people/Pete.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              quote="Feugiat sed lectus vestibulum mattis ullamcorper velit. Sed enim ut sem viverra aliquet. Duis ultricies lacus sed turpis tincidunt id aliquet. Viverra nibh cras pulvinar mattis."
            ></SupervisorCard>
            <SupervisorCard
              name="Eleanor Smith"
              role="Supervisor"
              image="/images/people/Eleanor.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              quote="Feugiat sed lectus vestibulum mattis ullamcorper velit. Sed enim ut sem viverra aliquet. Duis ultricies lacus sed turpis tincidunt id aliquet. Viverra nibh cras pulvinar mattis."
            ></SupervisorCard>
            <SupervisorCard
              name="Yvonne Tasker"
              role="Supervisor"
              image="/images/people/Yvonne.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              quote="Feugiat sed lectus vestibulum mattis ullamcorper velit. Sed enim ut sem viverra aliquet. Duis ultricies lacus sed turpis tincidunt id aliquet. Viverra nibh cras pulvinar mattis."
            ></SupervisorCard>
          </SupervisorCards>
        </ContentWrapper>
      </Wrapper>
    </LazyLoad>
  )
}

const SubHeading = styled(H3)`
  text-align: center;

  // animation
  opacity: 0;
  animation: ${slideDown} 1s forwards;
`

const TextBlock = styled.div`
  margin: auto;
  max-width: 1080px; // ?
  padding: 0px 20px;
  margin: 40px auto;

  // animation
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
`

const Wrapper = styled.div``

const ContentWrapper = styled.div``

const SupervisorCards = styled.div`
  display: grid;
  gap: 80px;
  margin-top: 100px;
`

const Text = styled(BodyMain)`
  text-align: left;
`
