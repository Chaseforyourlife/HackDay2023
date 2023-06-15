import React from 'react';
import TimeStamp from "../TimeStamp/TimeStamp"

const QuestionStats = (props) => {
    return (
        <div>
            <TimeStamp createdAt={props.createdAt}/>
        </div>
    );
}

export default QuestionStats;
