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
      props.setAnswer4(true)
      let input = document.querySelectorAll('input')
      for (let i = 0; i < input.length; i++) {
        input[i].style.backgroundColor = 'lime'
      }
    } else {
      let input = document.querySelectorAll('input')
      for (let i = 0; i < input.length; i++) {
        input[i].style.backgroundColor = 'red'
      }
    }
  }

  if (props.timer === 900) {
    clearInterval(props.int)
    return (
      <div className='page'>
        <div className='text'>You were not able to Escape the Web!
          Click the button to try again, but this try you will
          have unlimited time. Figure out the puzzles and then
          try again with the timer! Good luck!</div>
        <Link to='/'>
          <button className='puzzle-button'>Try Again</button>
        </Link>
      </div>
    )
  }

  return (
    <div className='page'>
      <h1>Puzzle 4</h1>
      <div className='timer'>{props.timer}</div>
      <nav className='links'>
        <Link to='/home'>
          <button className='puzzle-button'>Home</button>
        </Link>
      </nav>
      
      <div className='text'>
        You may have noticed some numbers
        showing up after the locks have been unlocked. Try inputting
        those numbers into this passcode checker. As for the last number,
        there are some secrets hidden throughout the first three puzzles. Find them and
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
          <div className='center-form'>
            <button className='submit'>Submit</button>
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default Puzzle4