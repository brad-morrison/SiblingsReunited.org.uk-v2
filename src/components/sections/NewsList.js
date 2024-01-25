import React from "react"
import styled from "styled-components"
import { H3 } from "../styles/TextStyles"
import NewsCard from "../objects/NewsCard"
import { newsArticles } from "../../data/News"
import Block from "../objects/Block"
import BlockText from "../objects/BlockText"

function NewsList() {
  return (
    <Wrapper>
      <ContentWrapper>
        <BlockText animation="zoomIn" title="In the News" titleAlign="center" />
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
  gap: 60px;
`
const SubHeading = styled(H3)``
