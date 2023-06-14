import Question from '../../components/Question/Question'
import React from 'react'
import './Post.css'

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

export default function Post() {

  return (
    <div>
      <Question questionInfo={questionInfo}/>
    </div>
  )
}
