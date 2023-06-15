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
  
  
  const questions = [ questionInfo, questionInfo, questionInfo ]



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
    </React.Fragment>

    </Grid>
        
    );
}
