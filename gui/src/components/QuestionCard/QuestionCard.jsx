import React from 'react';
import { Box, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import TagList from '../Common/TagList/TagList'

const QuestionInfo = (props) => {
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
                    <Button>View Question</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default QuestionInfo;
