import Question from '../../components/Question/Question'
import AnswerList from '../../components/AnswerList/AnswerList'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import './Post.css'
import { Box } from '@mui/material'

export default function Post(props){
  const {questionID} = useParams()
  const [questionInfo,setQuestionInfo] = useState(null)
  const getQuestionInfo = async() => {
    const data_json = await (await fetch(`/api/main/get_post/${questionID}`)).json()
    setQuestionInfo(data_json)
  }
  useEffect(()=>{
    getQuestionInfo(questionID)
  })
  if(questionInfo==null){
    return(<Box></Box>)
  }
  return (
    <Box>
      <Question questionInfo={questionInfo}/>
      <AnswerList questionInfo={questionInfo}/>
    </Box>
  )
}
