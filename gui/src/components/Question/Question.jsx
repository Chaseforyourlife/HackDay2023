import CommentList from '../Common/CommentList/CommentList';
import Content from '../Common/Content/Content';
import TagList from '../Common/TagList/TagList';
import QuestionInfo from '../Common/QuestionInfo/QuestionInfo';
import Votes from '../Common/Votes/Votes';
import React from 'react';
import './Question.css';
import { Box, Card, CardContent } from '@mui/material'

export default function Question(props) {
  return (
    <Box sx={{m: 4}}>
        <Box sx={{display: "flex", justifyContent: "flex-start"}}>
          <Votes votes={props.questionInfo.votes}/>
          <Card sx={{flexGrow: 1}}>
            <CardContent>

            <QuestionInfo title={props.questionInfo.title} userInfo={props.questionInfo.userInfo} createdAt={props.questionInfo.createdAt}/>


            <Content text={props.questionInfo.content}/>

            <TagList tagList={props.questionInfo.tagList}/>

            <Box>
              <CommentList comments={props.questionInfo.comments}/>
            </Box>
            </CardContent>
          </Card>
        </Box>
    </Box>
  )
}
