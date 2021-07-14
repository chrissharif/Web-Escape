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
  </div>
  )
}

export default Leaderboard