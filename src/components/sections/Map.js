import React from "react"
import styled from "styled-components"
import GoogleMapReact from "google-map-react"
import { breaks } from "../styles/BreakStyles"

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function Map() {
  const defaultProps = {
    center: {
      lat: 56.38923,
      lng: -3.09543,
    },
    zoom: 10,
  }

  return (
    <Wrapper>
      <MapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAwSgiJUA5FvGngfN0u9gwAE-WLTa9Rppc",
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={56.38923} lng={-3.09543} text="My Marker" />
        </GoogleMapReact>
      </MapWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border: white solid 10px;
  border-radius: 30px;
  overflow: hidden;
`

const MapWrapper = styled.div`
  height: 500px; // height of this component must be declared for Map to render
  width: 100%;

  @media (max-width: 900px) {
    height: 380px;
  }

  @media (max-width: ${breaks.phone}) {
    height: 300px;
  }
`
