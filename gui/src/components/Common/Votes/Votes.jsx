import { React, useState } from 'react'
import './Votes.css'
import { Card, CardContent, Button } from '@mui/material';
// import { ArrowDropDownIcon } from '@mui/icons-material'

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
      <CardContent sx={{flexDirection: 'column', justifyContent: 'space-between'}}>
        <Button
        sx={{background: 'red'}}
        variant="contained"
        onClick={handleUpvote}
        >Upvote</Button>
        <p>{difference}</p>
        <Button
        sx={{background: 'red'}}
        variant="contained"
        onClick={handleDownvote}
        >Downvote</Button>
      </CardContent>
    </Card>
  )
}

