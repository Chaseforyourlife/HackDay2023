import React from 'react';
import Answer from '../Answer/Answer';

const AnswerList = (props) => {
    return (props.answers.map((answer)=> <Answer answerInfo={answer}/>)
    );
}

export default AnswerList;
