import React from 'react';
import SortQuestionsBar from '../../components/SortQuestionsBar/SortQuestionsBar';
import QuestionList from '../../components/QuestionList/QuestionList';
import "./styles.css"
import { Box, Grid } from '@mui/material';




export default function Home(){
    return (<Box>
        <SortQuestionsBar/>
        <Grid container justifyContent="center" sx={{flexGrow: 1}} id='home-div'>
            <Grid item xs={8} spacing={8}>
                <QuestionList questions={questions}/>
            </Grid>
        </Grid>
    </Box>
    );
}


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

const questions = [ questionInfo, questionInfo, questionInfo]
const answers = [
    {
        content: "Test answer content 1",
        createdAt: "MM-DD-YYYY",
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
      upvotes: 2,
      downvotes: 0
    }
  },
  {
    content: "Test answer content 2",
    createdAt: "MM-DD-YYYY",
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
      upvotes: 2,
      downvotes: 5
    }
  }
]