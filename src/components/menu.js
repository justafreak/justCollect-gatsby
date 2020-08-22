import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile/">Profile</Link>
        </li>
      </ul>
    </>
  )
}

export default Menu
