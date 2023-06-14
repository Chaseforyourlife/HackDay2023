import React from 'react';
import SortQuestionsBar from '../../components/SortQuestionsBar/SortQuestionsBar';
import Post from '../Post/Post';
import NavBar from '../../components/NavBar/NavBar';
import "./styles.css"

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


export default function Home(){
    return (
        <div id='home-div'>
            <NavBar/>
            <SortQuestionsBar/>
            <Post questionInfo={questionInfo} answers={answers}/>
        </div>
    );
}