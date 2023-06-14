import React from 'react'
import './Answer.css'
import CommentList from '../Common/CommentList/CommentList';
import Content from '../Common/Content/Content';
import Votes from '../Common/Votes/Votes';

export default function Answer(props) {
  return (
    <div>
      <Votes votes={props.answerInfo.votes}/>

      <Content text={props.answerInfo.content}/>

      <CommentList comments={props.answerInfo.comments}/>
    </div>
  )
}
