import React from 'react'
import './Comment.css'

export default function Comment({userName, content}) {
  return (
    <div>
      <text>{content}</text>
      <text>{userName}</text>
    </div>
  )
}
