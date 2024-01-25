import React from "react"
import styled from "styled-components"
import PhotoAlbum from "react-photo-album"
import LazyLoad from "react-lazy-load"
import { fadeIn, speed } from "../styles/Animations"

const photos = [
  { src: "/images/new/1.jpg", width: 5616, height: 3744 },
  { src: "/images/new/2.jpg", width: 8256, height: 6192 },
  { src: "/images/new/3.jpg", width: 4928, height: 3280 },
  { src: "/images/new/4.jpg", width: 4114, height: 2886 },
  { src: "/images/new/5.jpg", width: 4000, height: 6000 },
  { src: "/images/new/6.jpg", width: 2640, height: 3960 },
  { src: "/images/new/7.jpg", width: 3506, height: 2329 },
  { src: "/images/new/8.jpg", width: 5923, height: 3332 },
  { src: "/images/new/9.jpg", width: 3648, height: 5472 },
  { src: "/images/new/10.jpg", width: 3000, height: 1915 },
  { src: "/images/new/11.jpg", width: 5760, height: 3840 },
  { src: "/images/new/12.jpg", width: 3070, height: 5464 },
]

export default function Gallery() {
  return (
    <LazyLoad>
      <Wrapper>
        <ContentWrapper>
          <PhotoAlbum layout="columns" photos={photos} />
        </ContentWrapper>
      </Wrapper>
    </LazyLoad>
  )
}

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`

const ContentWrapper = styled.div`
  padding: 50px;

  opacity: 0;
  animation: ${fadeIn} ${speed} forwards;
`
