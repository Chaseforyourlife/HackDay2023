import React from 'react';
import { Box, Typography} from '@mui/material';
import QuestionList from '../../components/QuestionList/QuestionList';

const questionInfo = {
    title: "Test Title",
    content: "Test content",
    createdAt: "MM-DD-YYYY",
    tagList: [
      {
        name: "tag1 name",
        url: "link"
      },
      {
        name: "tag2 name",
        url: "link"
      }
    ],
    userInfo: {
      username: "jack",
      position: "software engineer",
    },
    comments: [
      {
        content: "comment1",
        userInfo:  {
          username: "user1"
        }
      },
      {
        content: "comment2",
        userInfo: {
          username: "user2"
        }
      }
    ],
    votes: {
      upvotes: 1,
      downvotes: 0
    }
  }
  
  
  const questions = [ questionInfo, questionInfo, questionInfo ]



export default function Profile(){
    return (
        <Box sx = {{}}>
            <Typography sx = {{ typography: {lg: 'body1',d: 'body2', sm: 'body3'}}}>Put Username Here</Typography>
            <QuestionList questions = {questions}/>
        </Box>
    );
}