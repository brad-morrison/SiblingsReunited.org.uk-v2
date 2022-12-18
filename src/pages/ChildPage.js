import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import { H1 } from "../components/styles/TextStyles"
import { ImCloud } from "react-icons/im"
import ChildHero from "../components/childpage/ChildHero"

export default function ChildPage() {
  return (
    <Layout>
      <Seo title="Child Page" />
      <PageContentWrapper>
        <ChildHero />
        <ContentSection>
          <ContentSectionTitle>Hi There!</ContentSectionTitle>
        </ContentSection>
      </PageContentWrapper>
    </Layout>
  )
}

const PageContentWrapper = styled.div`
  background-color: skyblue;
`

const ContentSection = styled.div`
  position: relative;
  max-width: 1200px;
  padding: 50px;
  border-radius: 30px;
  margin: auto;
  background-color: white;
`

const ContentSectionTitle = styled.div`
  position: absolute;
  top: -30px;
  left: 0;
  right: 0;
  text-align: center;
  background-color: lightgray;
  width: fit-content;
  padding: 20px 40px;
  margin: auto;
  font-size: 30px;
  font-weight: 600;
  border-radius: 20px;
`
