import { React, useEffect, useState } from 'react'
import './Votes.css'
import { Card, CardContent, Button, Box } from '@mui/material';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDownIcon'

export default function Votes(props) {

  const [voteState, setVotes] = useState(props.votes)
  const [difference,setDifference] = useState(getDifference())
  function getDifference(){
    if(voteState.upvotes==null && voteState.downvotes==null){return 0}
    if(voteState.upvotes==null){return -voteState.downvotes}
    if(voteState.downvotes==null){return voteState.upvotes}
    return voteState.upvotes - voteState.downvotes
  }
  
  const handleVote = async(isUpvote,contentID,voteType) => {
    //setVotes((prev) => ({...prev, upvotes: prev.upvotes + 1}));
    let body = {
      "isUpvote":isUpvote,
      "contentID":contentID,
      "voteType":voteType
    }
    const data_json = await (await fetch('/api/vote',{method:'POST',body: JSON.stringify(body)})).json()
    setDifference()
  }

  return (
    <Box sx={{display: "flex", flexGrow:1, justifyContent: "space-between"}}>
      <Card>
        <CardContent sx={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <Button
          sx={{background: 'red'}}
          variant="contained"
          onClick={e=>handleVote()}
          >Upvote</Button>
          <p>{difference}</p>
          <Button
          sx={{background: 'red'}}
          variant="contained"
          onClick={e=>handleVote()}
          >Downvote</Button>
        </CardContent>
      </Card>
    </Box>
  )
}

