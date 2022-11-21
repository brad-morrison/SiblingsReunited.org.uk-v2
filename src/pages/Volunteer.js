import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import DetailDescSection from "../components/sections/DetailDescSection"
import Carousel from "../components/objects/Carousel"
import styled from "styled-components"

export default function VolunteerPage() {
  return (
    <Layout>
      <Seo title="Volunteer" />
      <TopicPageTitle title="Volunteer" img="/images/teacher.jpg" />
      <DetailDescSection
        title="Come and join our amazing team!"
        text1="On a Tuesday and we keep this day free for the upkeep, maintenance, help with the animals, garden section and for the development of new projects. The bell rings at 12.30 for soup and cake and we all gather around the kitchen table and have a good chat and catch up."
        text2="Please get in touch if you would like to receive information on our process to becoming a volunteer supervisor at star, even if you can just spare 2 hours a month you could be helping supervise one family."
      />
      <CarouselWrapper>
        <Carousel />
      </CarouselWrapper>
    </Layout>
  )
}

const CarouselWrapper = styled.div`
  width: 800px;
  height: 400px;
  overflow: hidden;
  object-fit: cover;
`
