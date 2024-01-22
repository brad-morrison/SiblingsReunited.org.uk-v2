import React from "react"
import styled from "styled-components"
import { H3, BodyMain } from "../styles/TextStyles"
import LazyLoad from "react-lazy-load"
import FundraiserCard from "../objects/FundraiserCard"

export default function FundraiserSection() {
  return (
    <Wrapper>
        <SubHeading id="our-funders">Our amazing fundraisers</SubHeading>
        <ContentWrapper>
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
        </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const ContentWrapper = styled.div`
    display: grid;
    gap: 30px;
`

const SubHeading = styled(H3)`
  text-align: center;
`