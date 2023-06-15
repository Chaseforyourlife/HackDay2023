import React, {useState} from 'react';
import { Box, Typography, Grid} from '@mui/material';
import QuestionList from '../../components/QuestionList/QuestionList';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';




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

  const answerInfo = [
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
  
  
  const questions = [ questionInfo, questionInfo, questionInfo ]
  const answers = [answerInfo, answerInfo]



export default function Profile(){
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
 
  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
};
    return (
        <Grid>
            <Typography>Hello</Typography>
            <React.Fragment>
                <Tabs value={currentTabIndex} onChange={handleTabChange}>
                    <Tab label='Questions' />
                    <Tab label='Answers' />
                </Tabs>

                {currentTabIndex === 0 && (
                    <Box sx={{ p: 3 }}>
                        <Typography variant='h5'>Questions</Typography>
                        <Typography variant='p'>
                            <QuestionList questions={questions}/>
                        </Typography>
                    </Box>
                )}

                {currentTabIndex === 1 && (
                    <Box sx={{ p: 3 }}>
                        <Typography variant='h5'>Answers</Typography>
                        <Typography variant='p'>
                            <answerList questions={answers}/>
                        </Typography>
                    </Box>
                )}
            </React.Fragment>
        </Grid>    
    );
}
