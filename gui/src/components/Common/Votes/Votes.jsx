import { React, useEffect, useState } from 'react'
import './Votes.css'
import { Card, CardContent, Button, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDownIcon'

export default function Votes(props) {
  const {questionID} = useParams()
  const [voteState, setVotes] = useState(props.votes)
  const [difference,setDifference] = useState(getDifference(props.votes.upvotes,props.votes.downvotes))
  function getDifference(upvotes,downvotes){
    if(upvotes==null && downvotes==null){return 0}
    if(upvotes==null){return -downvotes}
    if(downvotes==null){return upvotes}
    return upvotes - downvotes
  }
  useEffect(()=>{
    setDifference(getDifference())
    console.log('setDiff to:',getDifference())
  },voteState)
  const handleVote = async(isUpvote,contentID,voteType) => {
    //setVotes((prev) => ({...prev, upvotes: prev.upvotes + 1}));
    let body = {
      "isUpvote":isUpvote,
      "contentID":contentID,
      "voteType":voteType
    }
    const data_json = await (await fetch('/api/main/vote',{method:'POST',body: JSON.stringify(body),headers:{"Content-Type": "application/json"}})).json()
    console.log(data_json)
    setVotes({'downvotes':data_json.downvotes,'upvotes':data_json.upvotes})
    setDifference(getDifference(data_json.upvotes,data_json.downvotes))
  }

  return (
    <Box sx={{display: "flex", flexGrow:1, justifyContent: "space-between"}}>
      <Card>
        <CardContent sx={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <Button
          sx={{background: 'red !important'}}
          variant="contained"
          onClick={e=>handleVote(true,questionID,"question")}
          >Upvote</Button>
          <p>{difference}</p>
          <Button
          sx={{background: 'red !important'}}
          variant="contained"
          onClick={e=>handleVote(false,questionID,"question")}
          >Downvote</Button>
        </CardContent>
      </Card>
    </Box>
  )
}

