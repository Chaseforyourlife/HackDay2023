import React from 'react'
import './Answer.css'
import CommentList from '../Common/CommentList/CommentList';
import Content from '../Common/Content/Content';
import Votes from '../Common/Votes/Votes';
import { Box, Card, CardContent } from '@mui/material';

export default function Answer(props) {
  return (
    <Box sx={{my: 3}}>
      <Box sx={{display: "flex", justifyContent:"flex-start"}}>

      <Votes votes={props.questionInfo.voteInfoAnswers}/>

      <Card sx={{flexGrow: 1}}>
        <CardContent>
          <Content text={props.questionInfo.answerInfo.content}/>
          <CommentList comments={props.answerComments}/>
        </CardContent>
      </Card>

      </Box>
    </Box>
  )
}
