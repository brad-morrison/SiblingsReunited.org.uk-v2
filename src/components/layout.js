import React from "react"
import "./layout.css"
import Footer from "./layout/Footer"
import NavBar from "./layout/NavBar"

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
