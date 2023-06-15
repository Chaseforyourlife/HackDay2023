import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'
import {Box} from '@mui/material';


export default function QuestionList(props) {
    return (props.questions.map((question) => 
    <Box key={question.questionID}>
        <br/>
        <QuestionCard key={question.questionID} questionInfo={question}/> 
    </Box>
    ))
}