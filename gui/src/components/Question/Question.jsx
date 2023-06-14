import CommentList from '../Common/CommentList/CommentList';
import Content from '../Common/Content/Content';
import TagList from '../Common/TagList/TagList';
import QuestionInfo from '../Common/QuestionInfo/QuestionInfo';
import QuestionStats from '../Common/QuestionStats/QuestionStats';
import Votes from '../Common/Votes/Votes';
import React from 'react';
import './Question.css';

export default function Question(props) {
  return (
    <div style={{ border: "solid" }}>
      <Votes votes={props.questionInfo.votes}/>

      <QuestionInfo title={props.questionInfo.title} userInfo={props.questionInfo.userInfo} />

      <QuestionStats createdAt={props.questionInfo.createdAt}/>

      <Content text={props.questionInfo.content}/>

      <TagList tagList={props.questionInfo.tagList}/>

      <CommentList comments={props.questionInfo.comments}/>
    </div>
  )
}
