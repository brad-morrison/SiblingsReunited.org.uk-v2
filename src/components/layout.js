import React from "react"
import styled from "styled-components"
import "./layout.css"
import Footer from "./layout/Footer"
import NavBar from "./layout/NavBar"

function Layout({ children }) {
  return (
    <Site>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </Site>
  )
}

export default Layout

const Site = styled.div`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  overflow-x: hidden;
`
