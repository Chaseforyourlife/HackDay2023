import React from 'react';
import { Box, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import TagList from '../Common/TagList/TagList'

const QuestionInfo = (props) => {
    console.log(JSON.stringify(props))
    console.log(props.questionInfo)
    return (
        <Box>
            <Card variant="outlined">
                <CardContent>
                    <Box>
                        <Typography>
                            {props.questionInfo.title}
                        </Typography>
                        <TagList tagList={props.questionInfo.tagList}/>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button variant="contained" sx={{background: "red"}}>View Question</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default QuestionInfo;
