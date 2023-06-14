import React from 'react'
import './TimeStamp.css'

export default function TimeStamp() {
  const currentTime = new Date().toLocaleDateString;
  return (
    <div>
      <text>{currentTime}</text>
    </div>
  )
}
