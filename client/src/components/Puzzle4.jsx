import './Puzzle4.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Puzzle4(props) {

  const [answer1, setAnswer1] = useState(0)
  const [answer2, setAnswer2] = useState(0)
  const [answer3, setAnswer3] = useState(0)
  const [secret, setSecret] = useState(0)

  async function onSubmit(e) {
    e.preventDefault()
    if (answer1 === '4' && answer2 === '7' && answer3 === '1' && secret === '163') {
      console.log('correct')
      props.setAnswer4(true)
    } else {
      console.log('nope')
    }
  }

  return (
    <div>
      <h1>Puzzle 4</h1>
      <nav>
        <Link to='/home'>
          <button>Home</button>
        </Link>
      </nav>
      
      <div className='text'>
        You may have noticed some numbers
        showing up after the locks have been unlocked. Try inputting
        those numbers into this passcode checker. As for the last number,
        there are some secrets hidden throughout the puzzles. Find them and
        come back to finally excape.
      </div>

      <div className='puzzle-container'>
        <form onSubmit={onSubmit}>
        <input className='input blue'
          type='text'
          value={answer1}
          onChange={(e) => setAnswer1((e.target.value))}>
        </input>
        
        <input className='input red'
          type='text'
          value={answer2}
          onChange={(e) => setAnswer2((e.target.value))}>
        </input>
        
        <input className='input green'
          type='text'
          value={answer3}
          onChange={(e) => setAnswer3((e.target.value))}>
        </input>
        
        <input className='input secret-input'
          type='text'
          value={secret}
          onChange={(e) => setSecret((e.target.value))}>
        </input>
        <br />
        <button>Submit</button>
        </form>
        
      </div>

    </div>
  )
}

export default Puzzle4