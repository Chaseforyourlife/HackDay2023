import React from 'react';

const QuestionInfo = (props) => {
    return (
        <div>
            <div>
                <h1>Title: {props.title}</h1>
            </div> 
            <p>{props.userInfo.username}</p>
        </div>
    );
}

export default QuestionInfo;
