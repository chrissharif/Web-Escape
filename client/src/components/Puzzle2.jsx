import React from 'react'
import { Link } from 'react-router-dom'

function Puzzle2() {
  return (
    <div>
      <h1>Puzzle 2</h1>
      <nav>
        <Link to='/home'>
          <button>Home</button>
        </Link>
      </nav>
    </div>
  )
}

export default Puzzle2