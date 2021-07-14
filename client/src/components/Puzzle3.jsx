import React from 'react'
import { Link } from 'react-router-dom'

function Puzzle3() {
  return (
    <div>
      <h1>Puzzle 3</h1>
      <nav>
        <Link to='/home'>
          <button>Home</button>
        </Link>
      </nav>
    </div>
  )
}

export default Puzzle3