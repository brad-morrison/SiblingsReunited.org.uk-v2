import React from "react"
import styled from "styled-components"
import { H3 } from "../styles/TextStyles"
import NewsCard from "../objects/NewsCard"
import { newsArticles } from "../../data/News"

function NewsList() {
  return (
    <Wrapper>
      <ContentWrapper>
        <SubHeading id="who-we-are">In the News</SubHeading>
        <NewsCards>
          {newsArticles.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              subTitle={article.subTitle}
              link={article.link}
              image={article.image}
              date={article.date}
            ></NewsCard>
          ))}
        </NewsCards>
      </ContentWrapper>
    </Wrapper>
  )
}

export default NewsList

const Wrapper = styled.div``

const ContentWrapper = styled.div``

const NewsCards = styled.div`
  display: grid;
  gap: 30px;
`
const SubHeading = styled(H3)``
