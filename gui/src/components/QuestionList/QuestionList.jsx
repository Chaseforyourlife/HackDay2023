import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'


export default function QuestionList(props) {
    return (props.questionList.map((question) => <QuestionCard questionInfo={question.questionInfo}/>)
    )
}