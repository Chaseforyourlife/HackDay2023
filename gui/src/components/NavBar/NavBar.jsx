import React from 'react'
import './NavBar.css'


export default function NavBar() {
  return (
    <nav className = "nav">
      <a href="/Home">Home</a>
      <ul>
        <li>
          <a href="/Profile">Profile</a>
        </li>
      </ul>
    </nav>
  )
}
