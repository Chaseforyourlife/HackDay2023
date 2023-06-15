import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'
import {Box} from '@mui/material';


export default function QuestionList(props) {
    return (props.questions.map((question) => 
    <>
        <QuestionCard questionInfo={question}/>
        <br/>
    </>
    ))
}