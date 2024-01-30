import styled from "styled-components"
import { themes } from "./ColorStyles"
import { breaks } from "./BreakStyles"

// -- //

// hero title
export const HeroTitle = styled.h1`
  color: ${themes.text1};
  font-weight: bold;
  font-size: 3.8rem;
  line-height: 120%;

  @media (max-width: ${breaks.tablet}) {
    font-size: 3rem;
  }

  @media (max-width: ${breaks.phone}) {
    font-size: 2.2rem;
  }
`

// sub hero title
export const H1 = styled.h2`
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 120%;

  @media (max-width: ${breaks.tablet}) {
    font-size: 2rem;
  }

  @media (max-width: ${breaks.phone}) {
    font-size: 1.8rem;
  }
`

// all main titles
export const H2 = styled.h2`
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 120%;

  @media (max-width: ${breaks.tablet}) {
    font-size: 1.7rem;
  }

  @media (max-width: ${breaks.phone}) {
    font-size: 1.6rem;
  }
`

// intro titles
// card titles
export const H3 = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 120%;
`

// most body text
export const BodyMain = styled.p`
  color: ${themes.text1};
  font-size: 1.4rem;
  line-height: 140%;

  @media (max-width: ${breaks.tablet}) {
    font-size: 1.3rem;
  }

  @media (max-width: ${breaks.phone}) {
    font-size: 1.2rem;
  }
`

// quote text
export const MediumText = styled.p`
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
`

//  !

// card title
export const H4 = styled.h3`
  font-weight: bold;
  font-size: 26px;
  line-height: 120%;
`

// section titles
export const BodyIntro = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`

// text on custom button
export const ButtonText = styled.p`
  width: fit-content;
  padding: 18px 22px;
  border-radius: 50px;
  font-weight: 900;
  font-size: 20px;
`

export const Caption = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`

export const Caption2 = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
`

export const SmallText = styled.p`
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
`

export const SmallText2 = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  text-transform: uppercase;
`
