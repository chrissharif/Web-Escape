import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'

function Puzzle1() {

  const [answer, setAnswer] = useState(0)

  async function onSubmit(e) {
    e.preventDefault()
    if (answer === 4) {
      console.log('correct')
    } else {
      console.log('nope')
    }
  }

  return (
    <div>
      <h1>Puzzle 1</h1>
      <nav>
        <Link to='/home'>
          <button>Home</button>
        </Link>
      </nav>
      <form onSubmit={onSubmit}>
        <input
          type='number'
          value={answer}
          onChange={(e) => setAnswer(parseInt(e.target.value))}
          placeholder='Answer'>
        </input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Puzzle1