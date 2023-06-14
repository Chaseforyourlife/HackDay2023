import { React, useState } from 'react'
import './Votes.css'

export default function Votes({votes}) {

  const [voteState, setVotes] = useState(votes)
  const difference = voteState.upvotes - voteState.downvotes;
  
  function handleUpvote() {
    setVotes((prev) => ({...prev, upvotes: prev.upvotes + 1}));
  }

  function handleDownvote() {
    setVotes((prev)=> ({...prev, downvotes: prev.downvotes + 1}));
  }

  return (
    <div>
      <button
      onClick={handleUpvote}
      >Upvote</button>
      <p>{difference}</p>
      <button
      onClick={handleDownvote}
      >Downvote</button>
    </div>
  )
}

