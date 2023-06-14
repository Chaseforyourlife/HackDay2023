import Question from '../../components/Question/Question'
import React from 'react'
import './Post.css'

export default function Post() {
  const questionInfo = {
    title: "Test Title",
    content: "Test content",
    tagList: [
      "tag1",
      "tag2"
    ],
    userInfo: {
      username: "jack",
      position: "software engineer",
    },
    comments: [
      {
        username: "user1",
        content: "comment1"
      },
      {
        username: "user2",
        content: "comment2"
      }
    ],
    votes: {
      upvotes: 1,
      downvotes: 0
    }
  }

  return (
    <div>
      <Question payload={questionInfo}/>
    </div>
  )
}
