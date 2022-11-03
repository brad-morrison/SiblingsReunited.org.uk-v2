import React from "react"

const menuData = [
  "Home",
  "About us",
  "What we do",
  "Contact",
  "Help",
  "Shop",
  "Fundraising ",
]

export default function Header() {
  return (
    <>
      {menuData.map(item => (
        <p>{item}</p>
      ))}
    </>
  )
}
