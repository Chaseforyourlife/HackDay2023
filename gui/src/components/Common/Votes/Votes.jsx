import { React, useState } from 'react'
import './Votes.css'
import { Card, CardContent } from '@mui/material';

export default function Votes(props) {

  const [voteState, setVotes] = useState(props.votes)
  const difference = voteState.upvotes - voteState.downvotes;
  
  function handleUpvote() {
    setVotes((prev) => ({...prev, upvotes: prev.upvotes + 1}));
  }

  function handleDownvote() {
    setVotes((prev)=> ({...prev, downvotes: prev.downvotes + 1}));
  }

  return (
    <Card>
      <CardContent>
        <button
        onClick={handleUpvote}
        >Upvote</button>
        <p>{difference}</p>
        <button
        onClick={handleDownvote}
        >Downvote</button>
      </CardContent>
    </Card>
  )
}

