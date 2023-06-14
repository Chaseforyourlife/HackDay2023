import React from 'react'
import './TimeStamp.css'

export default function TimeStamp(props) {
  const currentTime = new Date().toLocaleDateString;
  return (
    <div>
      <p>{props.createdAt}</p>
    </div>
  )
}
