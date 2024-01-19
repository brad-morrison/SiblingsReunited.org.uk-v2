import React from "react"
import styled, { keyframes } from "styled-components"
import PostCard from "../objects/PostCard"
import { BodyIntro } from "../styles/TextStyles"

function TriplePostSection(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <MainTitle>{props.title}</MainTitle>
        <PostCards>
          <PostCard
            title="Find out more about our unique charity"
            subTitle="We are the first of it's kind in the UK"
            img="/images/teacher.jpg"
          />

          <PostCard
            title="Donate or fundraise to help us do what we do"
            subTitle="No donation is too small or too large"
            img="images/donate.png"
          />

          <PostCard
            title="Come and volunteer for Siblings Reunited"
            subTitle="We are always looking for new team members."
            img="images/volunteer.jpg"
          />
        </PostCards>
      </ContentWrapper>
    </Wrapper>
  )
}

export default TriplePostSection

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(50px); filter: blur(2px)}
  to { opacity: 1;  transform: translateY(0px);  filter: blur(0px)}
`

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); filter: blur(2px)}
  to { opacity: 1;  transform: translateY(0px);  filter: blur(0px)}
`

const Wrapper = styled.div`
  position: relative;
`

const MainTitle = styled(BodyIntro)`
  text-align: center;
  margin-bottom: 30px;
  animation: ${slideDown} 1s;
`

const ContentWrapper = styled.div`
  max-width: 1300px;
  box-sizing: border-box;
  height: auto;

  margin: auto;
`

const PostCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  height: auto;

  // mid
  @media (max-width: 1034px) {
    grid-template-columns: auto auto;
    padding: 0 20px;
    gap: 20px;
  }
  
  // small
  @media (max-width: 688px) {
    grid-template-columns: auto;
    padding: 0 20px;
    gap: 20px;
  }

  // animations
  > * {
    opacity: 0;
    animation: ${slideUp} 1s forwards;

    :nth-child(1) {
      animation-delay: 0.1s;
    }

    :nth-child(2) {
      animation-delay: 0.3s;
    }

    :nth-child(3) {
      animation-delay: 0.5s;
    }
  }


`
