import React from "react"
import styled from "styled-components"

function Spacer(props) {
    return (
      <SpacerWrapper size={props.size}>
      </SpacerWrapper>
    )
  }
  
  export default Spacer
  
  const SpacerWrapper = styled.div`
    
    height: ${props =>  props.size === 'lg' ? '120px' 
                        : props.size === 'md' ? '80px'
                        : props.size === 'sm' ? '50px' 
                        : '0px' };

    width: 100%;
  `
  