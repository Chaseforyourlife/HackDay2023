import React from 'react';
import Answer from '../Answer/Answer';
import { Box} from '@mui/material';

const AnswerList = (props) => {
    return (
        <Box sx={{m: 4}}>
            {props.answers.map((answer)=> <Answer answerInfo={answer}/>)}
        </Box>
    );
}

export default AnswerList;
