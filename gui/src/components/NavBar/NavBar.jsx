import { React, useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import TextField from '@mui/material/TextField'
import './NavBar.css'
import { CheckBoxOutlineBlankRounded } from '@mui/icons-material'


export default function NavBar() {
  return (
    <nav id='main-nav-bar' className="nav">
      <a href="/" className='site-title'>
        <div className='content-block'>
          <img id='logo-img' src='/StateFarmOverflow.png' />
          <div className='space'></div>
          <h3 id='navbar-title' className=''>Stack Farm Overflow</h3>
        </div>
      </a>
      <ul>
        <Search>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <CustomLink href='/profile'>Profile</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ href, children, ...props}) {
  const path = window.location.pathname
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}

      </a>
    </li>
  )
}
const StyledCustomLink = styled(CustomLink)(({theme}) =>({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, .25),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.Grey, 1), color: alpha(theme.palette.common.black, 1)
  }
}));

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
    padding: theme.spacing(1, 1, 1, 3),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: '20px',
    borderRadius: '10px',
    border: '1.5px solid rgba(0, 0, 0, 0.4)',
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
      // '&:focus': {
      //   width: '85ch',
      // },
    },
  },
}));