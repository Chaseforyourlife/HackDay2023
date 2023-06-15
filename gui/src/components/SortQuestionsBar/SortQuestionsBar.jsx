import React from 'react'
import './SortQuestionsBar'

function handleSortClick(sortType) {
    // call helper with based on sort type
    
}

export default function SortQuestionsBar() {
  return (
    <div>
        <button 
        className='small-btn'
        id="interesting-button"
        onClick={()=> handleSortClick("interesting")}
        >Interesting</button>

        <button 
        className='small-btn'
        id="hot-button"
        onClick={()=> handleSortClick("hot")}
        >Hot</button>

        <button 
        className='small-btn'
        id="week-button"
        onClick={()=> handleSortClick("week")}
        >Week</button>

        <button 
        className='small-btn'
        id="month-button"
        onClick={()=> handleSortClick("month")}
        >Month</button>
    </div>
  )
}
