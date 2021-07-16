import './Win.css'
import React from 'react'

function Win() {

  

  return (
    <div>
      <div className='text'>You escaped! You finished in (time).<br />
        Put yourself on the Leaderboard to see where you place!</div>
      <form className='post'>
        <div className='line'>
          <label>Name</label>
          <input className='new' placeholder='name'></input>
        </div>
        <div className='line'>
          <label>Time</label>
          <input className='new' placeholder='time'></input>
        </div>
        <div className='line'>
          <label>Date</label>
          <input className='new' placeholder='date'></input>
        </div>
      </form>
    </div>
  )
}

export default Win