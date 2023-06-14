import Comment from '../../Comment/Comment'
import React from 'react'
import './CommentList.css'


export default function CommentList({comments}) {
  return (comments.map((comment) => 
      <Comment userName={comment.userName} content={comment.content}/>
    )
  )
}

