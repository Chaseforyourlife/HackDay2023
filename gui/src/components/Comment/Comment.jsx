import React from 'react'
import './Comment.css'

export default function Comment(props) {
  return (
    <div>
      <p>{props.content} - {props.userInfo.username}</p>
    </div>
  )
}
