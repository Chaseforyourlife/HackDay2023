import React from 'react';
import Answer from '../Answer/Answer';
import { Box} from '@mui/material';

const AnswerList = (props) => {
    return (
        <Box sx={{m: 4}}>
            {props.questionInfo.answers.map((answer)=> <Answer questionInfo={props.questionInfo}/>)}
        </Box>
    );
}

export default AnswerList;
