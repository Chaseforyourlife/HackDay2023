import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react'; //ES6 js
import Profile from './pages/Profile/Profile';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post'
import CreateQuestion from './pages/CreateQuestion/CreateQuestion';
import LoginForm from './pages/LoginForm/LoginForm';
import { Grid } from '@mui/material'

export default function App(){
    const [loggedIn, setLoggedIn] = useState(false);

    function login() {
      setLoggedIn(true);
    }

    return(
        <Router>
          <div className="App" id="App">
                <meta httpEquiv="Cache-Control" content=" no-cache, no-store, must-revalidate"></meta>
                <header className="App-header" id="App-header">
                    <NavBar loggedIn={loggedIn}/>
                    <hr className='divider'/>
                    <Grid container justifyContent="center">
                      <Grid item xs={10} sm={8} sx={{my:2}}>
                        <Routes>
                            <Route path="/" element={<Home loggedIn={loggedIn}/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/post/:questionID" element={<Post/>}/>
                            <Route path="/create" element={<CreateQuestion/>}/>
                            <Route path="/login" element={<LoginForm loginCallback={login}/>}/>
                        </Routes>
                      </Grid>
                    </Grid>
                </header>
            </div>
        </Router>
    )
}

const questionInfo = {
  title: "Test Title",
  content: "Test content",
  createdAt: "MM-DD-YYYY",
  tagList: [
    {
      name: "tag1 name",
      url: "link"
    },
    {
      name: "tag2 name",
      url: "link"
    }
  ],
  userInfo: {
    username: "jack",
    position: "software engineer",
  },
  comments: [
    {
      content: "comment1",
      userInfo:  {
        username: "user1"
      }
    },
    {
      content: "comment2",
      userInfo: {
        username: "user2"
      }
    }
  ],
  votes: {
    upvotes: 1,
    downvotes: 0
  }
}

const answers = [
  {
    content: "Test answer content 1",
    createdAt: "MM-DD-YYYY",
    userInfo: {
      username: "jack",
      position: "software engineer",
    },
    comments: [
      {
        content: "comment1",
        userInfo:  {
          username: "user1"
        }
      },
      {
        content: "comment2",
        userInfo: {
          username: "user2"
        }
      }
    ],
    votes: {
      upvotes: 2,
      downvotes: 0
    }
  },
  {
    content: "Test answer content 2",
    createdAt: "MM-DD-YYYY",
    userInfo: {
      username: "jack",
      position: "software engineer",
    },
    comments: [
      {
        content: "comment1",
        userInfo:  {
          username: "user1"
        }
      },
      {
        content: "comment2",
        userInfo: {
          username: "user2"
        }
      }
    ],
    votes: {
      upvotes: 2,
      downvotes: 5
    }
  }
]