import React from 'react'
import './NavBar.css'


export default function NavBar() {
  return (
    <nav className = "nav">
      <a href="/Home" className='site-title'>
        Home
      </a>
      <ul>
        <CustomLink href='/profile'>Profile</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  )
}