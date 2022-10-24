import { stripLineComment } from "babel-plugin-styled-components/lib/minify"
import React from "react"
import styled from "styled-components"
import PostCard from "../objects/PostCard"
import { H1, MediumText } from "../styles/TextStyles"

function TriplePostSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <PostCards>
          <PostCard
            title="Find out more about our unique charity"
            subTitle="We are the first of it's kind in the UK"
          />
          <PostCard
            title="Donate or fundraise to help us do what we do"
            subTitle="No donation is too small or too large"
          />
          <PostCard
            title="Come and volunteer for Siblings Reunited"
            subTitle="We are always looking for new team members."
          />
        </PostCards>
      </ContentWrapper>
    </Wrapper>
  )
}

export default TriplePostSection

const Wrapper = styled.div`
  position: relative;
`

const ContentWrapper = styled.div`
  max-width: 1300px;
  box-sizing: border-box;
  margin: 100px auto;
  height: auto;
`

const PostCards = styled.div`
  display: grid;
  padding: 0 30px;
  grid-template-columns: auto auto auto;
  gap: 30px;
  height: 100%;

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
`
