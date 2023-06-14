import React from 'react'
import './Question.css'

export default function Question(title, content, tagList, userInfo, timeStamp, commentList, votes) {
  return (
    <div>
      <div id="title-bar">
        <label>{title}</label>
        <div>
          <TimeStamp time={timeStamp}/>
          <UserTag info={userInfo}/>
        </div>

        <Content text={content}/>
      </div>
    </div>
  )
}
