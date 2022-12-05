import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Seo from "../components/seo"
import TopicPageTitle from "../components/sections/TopicPageTitle"
import { H1 } from "../components/styles/TextStyles"
import { ImCloud } from "react-icons/im"

export default function ChildPage() {
  return (
    <Layout>
      <Seo title="Child Page" />
      <HeroWrapper>
        <HeroContent>
          <ImageWrapper>
            <Image src="/images/logos/logo.svg"></Image>
          </ImageWrapper>

          <HeroTitle>We can't wait to welcome you!</HeroTitle>

          <Clouds>
            <ImCloud className="cloud1" />
            <ImCloud className="cloud2" />
            <ImCloud className="cloud3" />
            <ImCloud className="cloud4" />
            <ImCloud className="cloud5" />
            <ImCloud className="cloud6" />
            <ImCloud className="cloud7" />
            <ImCloud className="cloud8" />
          </Clouds>
        </HeroContent>
      </HeroWrapper>
    </Layout>
  )
}

const HeroWrapper = styled.div`
  width: 100%;
  background-color: skyblue;
`

const HeroContent = styled.div`
  display: grid;
  min-height: 600px;
  justify-content: center;
  align-content: center;
`

const ImageWrapper = styled.div`
  display: grid;
  justify-content: center;
`
const Image = styled.img`
  height: 200px;
  display: none; // not sure about logo yet
`

const HeroTitle = styled(H1)`
  text-align: center;
  color: white;
`

const Clouds = styled.div`
  // globals
  color: white;

  // individual clouds
  .cloud1 {
    position: absolute;
    animation: moveclouds 30s linear infinite;
    font-size: 210px;
    transform: translateY(-360px);
  }
  .cloud2 {
    position: absolute;
    animation: moveclouds 80s linear infinite;
    font-size: 130px;
    transform: translateY(-200px);
    opacity: 50%;
  }

  .cloud3 {
    position: absolute;
    animation: moveclouds 30s linear infinite;
    font-size: 350px;
    transform: translateY(-100px);
    opacity: 90%;
    animation-delay: -15s;
  }

  .cloud4 {
    position: absolute;
    animation: moveclouds 50s linear infinite;
    font-size: 240px;
    transform: translateY(-300px);
    opacity: 70%;
    animation-delay: -15s;
  }

  .cloud5 {
    position: absolute;
    animation: moveclouds 90s linear infinite;
    font-size: 140px;
    transform: translateY(-100px);
    opacity: 30%;
    animation-delay: -30s;
  }
  .cloud6 {
    position: absolute;
    animation: moveclouds 90s linear infinite;
    font-size: 100px;
    transform: translateY(-190px);
    opacity: 50%;
    animation-delay: -60s;
  }

  .cloud7 {
    position: absolute;
    animation: moveclouds 90s linear infinite;
    font-size: 120px;
    transform: translateY(-140px);
    opacity: 75%;
    animation-delay: -60s;
    z-index: ;
  }

  .cloud8 {
    position: absolute;
    animation: moveclouds 130s linear infinite;
    font-size: 330px;
    transform: translateY(-100px);
    opacity: 90%;
    animation-delay: -100s;
  }

  // keyframes
  @keyframes moveclouds {
    0% {
      margin-left: 2000px;
    }
    100% {
      margin-left: -2000px;
    }
  }

  @media (max-width: 1100px) {
    // keyframes
    @keyframes moveclouds {
      0% {
        margin-left: 1400px;
      }
      100% {
        margin-left: -1400px;
      }
    }
  }

  @media (max-width: 800px) {
    // keyframes
    @keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
  }
`
