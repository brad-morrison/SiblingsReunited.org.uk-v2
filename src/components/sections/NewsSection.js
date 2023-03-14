import React from "react"
import styled from "styled-components"
import { BodyIntro, BodyMain, H1, H2, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import FeaturedPostSection from "../sections/FeaturedPostSection"
import NewsCard from "../objects/NewsCard"
import { newsArticles } from "../../data/News"

function NewsSection() {
  return (
    <Wrapper>
      <ContentWrapper>
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

export default NewsSection

const Wrapper = styled.div``

const ContentWrapper = styled.div``

const NewsCards = styled.div`
  display: grid;
  gap: 30px;
`
