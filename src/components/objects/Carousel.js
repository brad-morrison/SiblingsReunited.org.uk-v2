import React, { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"

export default function Carousel(props) {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  }
  const carousel = useRef()
  return (
    <Top>
      <Slider {...settings}>
        {props.images.map(item => (
          <div key={item.id}>
            <img src={item.src} />
          </div>
        ))}
      </Slider>
    </Top>
  )
}

const Top = styled.div`
  img {
  }
`
const ImageWrapper = styled.div``
const Image = styled.img``
