import React from "react"
import styled from "styled-components"
import "./layout.css"
import Footer from "./layout/Footer"
import NavBar from "./layout/NavBar"
import SideMenu from "./layout/SideMenu"
import Test from "./test"

function Layout({ children }) {
  return <main>{children}</main>
}

export default Layout

/* 

const Site = styled.div`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  overflow-x: hidden;
`
*/
