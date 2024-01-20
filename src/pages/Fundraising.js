import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import DetailDescSection from "../components/sections/DetailDescSection"
import { BodyMain, H3, H4 } from "../components/styles/TextStyles"
import styled from "styled-components"
import Button from "../components/objects/Button"
import TriplePostSection from "../components/sections/TriplePostSection"
import { themes } from "../components/styles/ColorStyles"
import FundraiserCard from "../components/objects/FundraiserCard"
import Spline from "@splinetool/react-spline"

function FundraisingPage() {
  return (
    <Layout>
      <Seo title="Fundraising" />
      <TopicPageTitle title="Fundraise" img="/images/kids.jpeg" />
      <DetailDescSection
        id="help-us"
        title="Make a real difference by fundraising for Siblings Reunited"
        text="On a Tuesday and we keep this day free for the upkeep, maintenance, help with the animals, 
              garden section and for the development of new projects. The bell rings at 12.30 for soup and 
              cake and we all gather around the kitchen table and have a good chat and catch up. 
              <br><br> Find out more below."
      />
      <SubHeading id="fundraising-pack">
        Download our fundraising pack
      </SubHeading>
      <FundraisePackSection>
        <TextSection>
          <Title>
            Our fundraising pack has everything you need to start a fundraiser
          </Title>
          <Text>
            Our pack contains our logo, leaflet, flyer and a fundraising form.
            We also threw in a few extras such as stickers and bunting
            print-outs.
          </Text>
          <ButtonWrapper>
            <Button text="Download our pack"></Button>
          </ButtonWrapper>
        </TextSection>
        <MediaSection>
          <div>
            <Spline scene="https://prod.spline.design/oSt-U9ICTRCUU3jn/scene.splinecode" />
          </div>
        </MediaSection>
      </FundraisePackSection>

      <SubHeading>Or use our individual downloads</SubHeading>
      <TripleWrapper>
        <TriplePostSection></TriplePostSection>
      </TripleWrapper>

      <SubHeading id="our-funders">Our amazing fundraisers</SubHeading>
      <FundraiserCard
        image="/images/people/Nova.jpg"
        name="Karen Morrison"
        text="Our pack contains our logo, leaflet, flyer and a fundraising form.
        We also threw in a few extras such as stickers and bunting
        print-outs"
        raised="395"
      ></FundraiserCard>
      <FundraiserCard
        image="/images/people/Nova.jpg"
        name="Karen Morrison"
        text="Our pack contains our logo, leaflet, flyer and a fundraising form.
        We also threw in a few extras such as stickers and bunting
        print-outs"
        raised="1300"
      ></FundraiserCard>
      <FundraiserCard
        image="/images/people/Nova.jpg"
        name="Karen Morrison"
        text="Our pack contains our logo, leaflet, flyer and a fundraising form.
        We also threw in a few extras such as stickers and bunting
        print-outs"
        raised="40"
      ></FundraiserCard>
      <FundraiserCard
        image="/images/people/Nova.jpg"
        name="Karen Morrison"
        text="Our pack contains our logo, leaflet, flyer and a fundraising form.
        We also threw in a few extras such as stickers and bunting
        print-outs"
        raised="4995"
      ></FundraiserCard>
    </Layout>
  )
}

export default FundraisingPage

const SubHeading = styled(H3)`
  text-align: center;
`

const FundraisePackSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  padding: 30px;
  margin: 10px auto;
  height: 500px;

  //background-color: ${themes.secondaryBackground};
  align-content: center;
`

const TextSection = styled.div`
  display: grid;
  background-color: white;
  padding: 40px 40px;
  max-height: 340px;
  gap: 40px;
  border: 0.5px lightgray solid;
  //border-radius: 30px;
  box-shadow: 0px 7px 22px rgba(0, 0, 0, 0.2);
`

const MediaSection = styled.div``

const Title = styled(H4)``
const Text = styled(BodyMain)``

const ButtonWrapper = styled.div`
  display: grid;
  justify-content: center;
  transform: translateY(-10px);
`

const TripleWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`
