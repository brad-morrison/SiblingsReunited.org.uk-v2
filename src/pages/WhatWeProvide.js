import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import { BodyMain, H3 } from "../components/styles/TextStyles"
import styled from "styled-components"
import Quotes from "../components/sections/Quotes"
import Animals from "../components/sections/Animals"
import OurSite from "../components/sections/OurSite"
import Supervisors from "../components/sections/Supervisors"
import Events from "../components/sections/Events"
import Block from "../components/objects/Block"

function WhatWeProvidePage() {
  return (
    <Layout>
      <Seo title="WhatWeProvide" />
      <ContentWrapper>
        <TopicPageTitle title="What We Provide" img="/images/birdHouse.jpg" />

        <Block
          animation="slideIn"
          title="What makes us special?"
          text="Run from its unique farmland setting it provides a safe, fun and exhilarating learning environment where children. 
                <br><br>
                Run from its unique farmland setting it provides a safe, fun and exhilarating learning environment where children. "
          image="/images/site.jpg"
          flipped="1"
        />

        <OurSite />

        <div>
          <Quotes title={"What the children say"} />
          <Quotes />
        </div>

        <Animals />

        <Supervisors />

        <Events />
      </ContentWrapper>
    </Layout>
  )
}

export default WhatWeProvidePage

const ContentWrapper = styled.div`
  display: grid;
  gap: 160px;
`

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
