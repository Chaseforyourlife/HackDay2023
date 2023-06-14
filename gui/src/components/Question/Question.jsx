import CommentList from '../Common/CommentList/CommentList';
import Content from '../Common/Content/Content';
import TagList from '../Common/TagList/TagList';
import QuestionInfo from '../Common/QuestionInfo/QuestionInfo';
import QuestionStats from '../Common/QuestionStats/QuestionStats';
import Votes from '../Common/Votes/Votes';
import React from 'react';
import './Question.css';

export default function Question({payload}) {
  return (
    <div>
      {/* <Votes votes={payload.votes}/> */}

      {/* <QuestionStats time={payload.timeStamp}/> */}

      {/* <QuestionInfo title={payload.title} userInfo={payload.userInfo} /> */}

      <Content text={payload.content}/>

      {/* <TagList tags={payload.tagList}/> */}

      <CommentList comments={payload.comments}/>
    </div>
  )
}
