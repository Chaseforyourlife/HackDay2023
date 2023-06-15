import React from 'react';
import { Box, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import TagList from '../Common/TagList/TagList'
import "./QuestionCard.css"

const QuestionCard = (props) => {
    return (
        <Box sx={{my:"4"}}>
            <Card variant="outlined" style={{borderRadius: 15}}>
                <CardContent>
                    <Box>
                        <Typography style={{fontSize: 25, alight: "right", borderRadius: 15}}>
                            {props.questionInfo.title}
                        </Typography>
                        <TagList tagList={props.questionInfo.tagList} />
                    </Box>
                </CardContent>
                <CardActions style={{justifyContent:"right"}} className="round">
                  <Button variant="contained" style={{backgroundColor:"red !important"}}><a href={`/post/${props.questionInfo.questionID}`}>View Question</a></Button>

                </CardActions>
            </Card>
        </Box>
    );
}

export default QuestionCard;
