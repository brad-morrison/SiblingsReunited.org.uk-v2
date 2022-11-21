import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    easing: "spring",
  }
  return (
    <Slider {...settings}>
      <ImageWrapper>
        <Image src="/images/site.jpg" />
      </ImageWrapper>
      <ImageWrapper>
        <Image src="/images/donate.png" />
      </ImageWrapper>
      <ImageWrapper>
        <Image src="/images/wellies.png" />
      </ImageWrapper>
    </Slider>
  )
}

const ImageWrapper = styled.div`
  width: 100%;
  min-width: 100%;
`
const Image = styled.img`
  width: 100%;
  //background: url(${props => props.img});
  //background-size: cover;
`
