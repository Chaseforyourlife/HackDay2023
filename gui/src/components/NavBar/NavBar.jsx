import React from 'react'
import './NavBar.css'


export default function NavBar() {
  return (
    <nav className = "nav">
      <a href="/" className = "navBar">Home</a>
      <ul>
        <li>
          <a href="/About">Profile</a>
        </li>
      </ul>
    </nav>
  )
}
