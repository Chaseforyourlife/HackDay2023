import React,{useEffect,useState} from 'react';
import SortQuestionsBar from '../../components/SortQuestionsBar/SortQuestionsBar';
import QuestionList from '../../components/QuestionList/QuestionList';
import "./styles.css"
import { Box } from '@mui/material';


export default function Home(){
  const [questions,setQuestions] = useState([]);
  const getQuestions = async() => {
    const data_json = await (await fetch(`/api/main/get_posts`)).json()
    setQuestions(data_json.questions)
  }
  useEffect(()=>(
    getQuestions()
  ),[])
    return (
    <Box>
        <SortQuestionsBar/>
        <QuestionList questions={questions}/>
    </Box>
    );
}


const questionInfo1 = {
    title: "How to get access to s.f/dynatrace-test",
    content: "Test content",
    createdAt: "06-14-2023",
    tagList: [
        {
            name: "dynatrace",
            url: "link"
        },
        {
            name: "observation-deck-test",
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

const questionInfo2 = {
  title: "What is an AWS Lambda and where to learn ",
  content: "Test content",
  createdAt: "06-14-2023",
  tagList: [
      {
          name: "",
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

const questionInfo3 = {
  title: "Query search in Splunk isn't pulling the correct attributes",
  content: "Test content",
  createdAt: "06-14-2023",
  tagList: [
      {
          name: "",
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

const questions = [ questionInfo1, questionInfo2, questionInfo3]
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