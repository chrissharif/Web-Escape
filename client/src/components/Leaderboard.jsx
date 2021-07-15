import './Leaderboard.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Leaderboard() {
  return (
  <div>
      <h1>Leaderboard</h1>
      <nav>
        <Link to='/'>
          <button>Back</button>
        </Link>
      </nav>

      <div className='board'>
      <div className='leaderboard'>

        <div className='row'>
          <div className='sample'>Name</div>
          <div className='sample'>Rank</div>
          <div className='sample'>Time</div>
          <div className='sample'>Date</div>
        </div>
          
        <div className='row'>
          <div className='entry name'>chris</div>
          <div className='entry rank'>1</div>
          <div className='entry time'>3min</div>
          <div className='entry date'>today</div>
        </div>

        <div className='row'>
          <div className='entry name'>jerry</div>
          <div className='entry rank'>2</div>
          <div className='entry time'>4min</div>
          <div className='entry date'>today</div>
        </div>

      </div>
      </div>

  </div>
  )
}

export default Leaderboard