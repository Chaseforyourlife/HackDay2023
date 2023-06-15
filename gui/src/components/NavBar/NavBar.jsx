import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase';
import './NavBar.css'


export default function NavBar() {
  return (
    <nav className = "nav">
      <a href="/" className='site-title'>
        <div className='content-block'>
          <img id='logo-img' src='/StateFarmOverflow.png'/>
          <div className='space'></div>
          <h3 id='navbar-title' className=''>Stack Farm Overflow</h3>
        </div>
      </a>
      <ul>
        <CustomLink href='/profile'>Profile</CustomLink>
        <Search>
              
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, .25),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1), color: alpha(theme.palette.common.black, 1),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));