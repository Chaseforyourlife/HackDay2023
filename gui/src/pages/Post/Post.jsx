import Question from '../../components/Question/Question'
import AnswerList from '../../components/AnswerList/AnswerList'
import React from 'react'
import './Post.css'
import { Box } from '@mui/material'

export default function Post(props) {

  return (
    <Box>
      <Question questionInfo={props.questionInfo}/>
      <AnswerList answers={props.answers}/>
    </Box>
  )
}
