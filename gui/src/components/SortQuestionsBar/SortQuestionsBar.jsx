import React from 'react'
import './SortQuestionsBar'

function handleSortClick(sortType) {
    // call helper with based on sort type
    
}

export default function SortQuestionsBar() {
  return (
    <div>
        <button 
        id="interesting-button"
        onClick={()=> handleSortClick("interesting")}
        >Interesting</button>

        <button 
        id="hot-button"
        onClick={()=> handleSortClick("hot")}
        >Hot</button>

        <button 
        id="week-button"
        onClick={()=> handleSortClick("week")}
        >Week</button>

        <button 
        id="month-button"
        onClick={()=> handleSortClick("month")}
        >Month</button>
    </div>
  )
}
