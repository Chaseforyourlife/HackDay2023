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
        <Box sx={{display: "flex", flexGrow:1, justifyContent: "flex-start"}}>
          <Votes votes={props.questionInfo.voteInfoQuestion}/>
          <Card>
            <CardContent>

            <QuestionInfo questionInfo={props.questionInfo.questionInfo}/>
            <hr/>

            <Content text={props.questionInfo.questionInfo.content}/>

            <TagList tagList={props.questionInfo.questionInfo.tagList}/>

            <Box>
              <CommentList comments={props.questionInfo.questionComments}/>
            </Box>
            </CardContent>
          </Card>
        </Box>
    </Box>
  )
}
