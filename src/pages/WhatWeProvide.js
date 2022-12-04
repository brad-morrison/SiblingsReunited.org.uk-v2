import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import DetailDescSection from "../components/sections/DetailDescSection"
import { BodyMain, H3 } from "../components/styles/TextStyles"
import styled from "styled-components"
import SiteBlock from "../components/objects/SiteBlock"
import QuotesSection from "../components/sections/QuotesSection"
import AnimalCard from "../components/objects/AnimalCard"
import { animals } from "../data/Animals"
import SupervisorCard from "../components/objects/SupervisorCard"

export default function WhatWeProvidePage() {
  return (
    <Layout>
      <Seo title="WhatWeProvide" />
      <TopicPageTitle title="What We Provide" img="/images/birdHouse.jpg" />
      <DetailDescSection
        flipped="1"
        title="What makes us special?"
        text1="Run from its unique farmland setting it provides a safe, fun and exhilarating learning environment where children. "
        text2="Run from its unique farmland setting it provides a safe, fun and exhilarating learning environment where children. fun and exironment where children. "
      ></DetailDescSection>
      <SubHeading id="our-site">Our amazing site</SubHeading>
      <SiteBlock
        title="Woods"
        text1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      ></SiteBlock>
      <SiteBlock
        title="Polytunnel"
        text1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        flipped="1"
      ></SiteBlock>
      <SiteBlock
        title="Stables"
        text1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      ></SiteBlock>
      <SiteBlock
        title="Wigwam"
        text1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        flipped="1"
      ></SiteBlock>
      <SiteBlock
        title="BBQ Hut"
        text1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      ></SiteBlock>
      <SiteBlock
        title="Outdoor Kitchen"
        text1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        flipped="1"
      ></SiteBlock>
      <SubHeading>What the children say</SubHeading>
      <QuotesSection hideTitle="true"></QuotesSection>
      <QuotesSection hideTitle="true"></QuotesSection>

      <SubHeading id="animals">Meet the animals..</SubHeading>
      <TextBlock>
        <Text>
          We have lots of special animals here at STAR Siblings Reunited. We
          have lots of special animals here at STAR Siblings Reunited. We have
          lots of special animals here at STAR Siblings Reunited.
        </Text>
      </TextBlock>
      <AnimalCards>
        {animals.map((animal, index) => (
          <AnimalCard
            key={index}
            name={animal.name}
            type={animal.type}
            image={animal.image}
          ></AnimalCard>
        ))}
      </AnimalCards>

      <SubHeading id="supervisors">..and our amazing supervisors</SubHeading>
      <TextBlock>
        <Text>
          We have lots of special animals here at STAR Siblings Reunited. We
          have lots of special animals here at STAR Siblings Reunited. We have
          lots of special animals here at STAR Siblings Reunited.
        </Text>
      </TextBlock>
      <SupervisorsSection>
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
      </SupervisorsSection>

      <SubHeading id="events">Our Seasonal Events</SubHeading>
      <TextBlock>
        <Text>
          We have lots of special animals here at STAR Siblings Reunited. We
          have lots of special animals here at STAR Siblings Reunited. We have
          lots of special animals here at STAR Siblings Reunited.
        </Text>
      </TextBlock>
    </Layout>
  )
}

const SubHeading = styled(H3)`
  text-align: center;
`

const TextBlock = styled.div`
  margin: auto;
  max-width: 1080px; // ?
  padding: 0px 20px;
  margin: 40px auto;
`

const Text = styled(BodyMain)`
  text-align: left;
`

const AnimalCards = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 80px auto;
  justify-content: center;
  padding: 20px;
`

const SupervisorsSection = styled.div`
  display: grid;
  padding: 20px;
`
