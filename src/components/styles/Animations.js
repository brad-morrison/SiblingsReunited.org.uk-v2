import styled, { keyframes } from "styled-components"

const animations = true

const movement = animations ? "20px" : "0px" // distance that sliding objects move
const zoomStrength = animations ? 0.2 : 0 // magnitude of zoom in and out
export const speed = animations ? "0.8s" : "0"
const blur = animations ? "10px" : "0px" // blur effect strength

// zoom in
export const zoomIn = keyframes`
  from { opacity: 0; transform: scale(${1 - zoomStrength}); filter: ${blur}}
  to { opacity: 1;  transform: scale(1);  filter: blur(0px)}
`

// zoom out
export const zoomOut = keyframes`
  from { opacity: 0; transform: scale(${1 + zoomStrength}); filter: ${blur}}
  to { opacity: 1;  transform: scale(1);  filter: blur(0px)}
`

// fade in
export const fadeIn = keyframes`
  from { opacity: 0; filter: ${blur}}
  to { opacity: 1; filter: blur(0px)}
`

// fade in
export const blurIn = keyframes`
  from { opacity: 1; filter: ${blur}}
  to { opacity: 1; filter: blur(0px)}
`

// slide in left
export const slideLeft = keyframes`
  from { opacity: 0; transform: translateX(-${movement}); filter: ${blur}}
  to { opacity: 1;  transform: translateX(0px);  filter: blur(0px)}
`

// slide in right
export const slideRight = keyframes`
  from { opacity: 0;  transform: translateX(${movement}); filter: ${blur}}
  to { opacity: 1;   transform: translateX(0px);  filter: blur(0px)}
`

// slide up
export const slideUp = keyframes`
  from { opacity: 0; transform: translateY(${movement}); filter: ${blur}}
  to { opacity: 1;  transform: translateY(0px);  filter: blur(0px)}
`

// slide down
export const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-${movement}); filter: ${blur}}
  to { opacity: 1;  transform: translateY(0px);  filter: blur(0px)}
`

// for no animation
export const none = keyframes`
  from { opacity: 1; transform: translateY(0px); filter: blur(0px)}
  to { opacity: 1;  transform: translateY(0px);  filter: blur(0px)}
`
