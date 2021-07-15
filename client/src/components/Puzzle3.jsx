import './Puzzle3.css'
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

      <div className='text'>Sally is having a family party today
        and it looks like the guests start arriving. <br />There are a
        lot of guests coming, so Sally had a tough time figuring
        out who <br />brought what food. Can you help Sally find out who
        brought the <strong>apple pie?</strong>
      </div>
      <div className='puzzle-container'>
        <div className='clue'></div>
      </div>

    </div>
  )
}

export default Puzzle3