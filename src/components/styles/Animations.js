import styled, { keyframes } from "styled-components"

// zoom in
export const zoomIn = keyframes`
  from { opacity: 0; transform: scale(0.8); filter: blur(10px)}
  to { opacity: 1;  transform: scale(1);  filter: blur(0px)}
`

// zoom out
export const zoomOut = keyframes`
  from { opacity: 0; transform: scale(1.2); filter: blur(10px)}
  to { opacity: 1;  transform: scale(1);  filter: blur(0px)}
`

// fade in
export const fadeIn = keyframes`
  from { opacity: 0; filter: blur(10px)}
  to { opacity: 1; filter: blur(0px)}
`

// slide in left
export const slideLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); filter: blur(10px)}
  to { opacity: 1;  transform: translateX(0px);  filter: blur(0px)}
`

// slide in right
export const slideRight = keyframes`
  from { opacity: 0;  transform: translateX(50px); filter: blur(10px); }
  to { opacity: 1;   transform: translateX(0px);  filter: blur(0px)}
`

// slide up
export const slideUp = keyframes`
  from { opacity: 0; transform: translateY(50px); filter: blur(10px)}
  to { opacity: 1;  transform: translateY(0px);  filter: blur(0px)}
`

// slide down
export const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-50px); filter: blur(10px)}
  to { opacity: 1;  transform: translateY(0px);  filter: blur(0px)}
`

// for no animation
export const none = keyframes`
  from { opacity: 1; transform: translateY(0px); filter: blur(0px)}
  to { opacity: 1;  transform: translateY(0px);  filter: blur(0px)}
`
