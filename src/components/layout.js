import React from "react"
import { Link } from "gatsby"

export const Layout = ({ children }) => {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  )
}
