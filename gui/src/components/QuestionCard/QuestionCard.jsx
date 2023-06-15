import React from 'react';
import { Box, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import TagList from '../Common/TagList/TagList'
import "./QuestionCard.css"

const QuestionInfo = (props) => {
    return (
        <Box sx={{my:"4"}}>
            <Card variant="outlined">
                <CardContent>
                    <Box>
                        <Typography style={{fontSize: 30, padding: 20, alight: "right"}}>
                            {props.questionInfo.title}
                        </Typography>
                        <TagList tagList={props.questionInfo.tagList} />
                    </Box>
                </CardContent>
                <CardActions style={{justifyContent:"right"}}>
                  <Button variant="contained" style={{backgroundColor:"red", justifyContent:"right"}}>View Question</Button>

                </CardActions>
            </Card>
        </Box>
    );
}

export default QuestionInfo;
