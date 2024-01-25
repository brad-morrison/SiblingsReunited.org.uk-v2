import React from "react"
import styled, { keyframes } from "styled-components"
import { teamMembers } from "../../data/TeamMembers"
import TeamMemberCard from "../objects/TeamMemberCard"
import { breaks } from "../styles/BreakStyles"
import { H3, BodyMain } from "../styles/TextStyles"
import Block from "../objects/Block"
import BlockText from "../objects/BlockText"
import { slideDown, speed } from "../styles/Animations"

export default function Team() {
  return (
    <Wrapper>
      <ContentWrapper>
        <BlockText
          title="Meet the Siblings Reunited Team"
          titleAlign="center"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <TeamCards>
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              firstName={member.firstName}
              lastName={member.lastName}
              role={member.role}
              image={member.image}
            ></TeamMemberCard>
          ))}
        </TeamCards>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  // animation
  opacity: 0;
  animation: ${slideDown} ${speed} forwards;

  display: grid;
  gap: 80px;
`

const TeamCards = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-evenly;
  gap: 40px;
  grid-template-columns: auto auto auto auto;
  //margin: 50px 0px;

  @media (max-width: ${breaks.tablet}) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 770px) {
    grid-template-columns: auto auto;
  }
`
const SubHeading = styled(H3)``

const Text = styled(BodyMain)``
