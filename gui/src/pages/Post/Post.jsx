import Question from '../../components/Question/Question'
import AnswerList from '../../components/AnswerList/AnswerList'
import React from 'react'
import './Post.css'

export default function Post(props) {

  return (
    <div>
      <Question questionInfo={props.questionInfo}/>
      <AnswerList answers={props.answers}/>
    </div>
  )
}
