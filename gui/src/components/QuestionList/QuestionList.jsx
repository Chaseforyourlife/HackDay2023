import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'


export default function QuestionList(props) {
    return (props.questions.map((question) => <QuestionCard questionInfo={question}/>)
    )
}