import './Puzzle1.css'
import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'

function Puzzle1(props) {

  const [answer, setAnswer] = useState(0)

  async function onSubmit(e) {
    e.preventDefault()
    if (answer === 893) {
      props.setAnswer1(true)
      let input = document.querySelector('input')
      input.style.backgroundColor = 'lime'
    } else {
      let input = document.querySelector('input')
      input.style.backgroundColor = 'red'
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
      <h1>Puzzle 1</h1>
      <div className='timer'>{props.timer}</div>
      <nav className='links'>
        <Link to='/home'>
          <button className='puzzle-button'>Home</button>
        </Link>
      </nav>

      <div>
        <p className='text2'>The <strong>secret code</strong> for this puzzle is made up of three digits.
          <br />Use the riddles below to determine the three
        numbers.</p>
      </div>

      <div className='num-box-container'>
        <div className='three-num-box'>
          <div className='num-box'>4</div><div className='num-box'>8</div><div className='num-box'>0</div><div className='text'>One number is correct,<br /> but in the wrong spot</div>
        </div>
        <div className='three-num-box'>
          <div className='num-box'>8</div><div className='num-box'>3</div><div className='num-box'>0</div><div className='text'>Two numbers are <br />correct and only one is <br /> in the correct spot</div>
        </div>
        <div className='three-num-box'>
          <div className='num-box'>7</div><div className='num-box'>9</div><div className='num-box'>6</div><div className='text'>One number is correct<br /> and in the correct spot</div>
        </div>
        <div className='three-num-box'>
          <div className='num-box'>3</div><div className='num-box'>6</div><div className='num-box secret'>1</div><div className='text'>One number is correct,<br /> but in the wrong spot</div>
        </div>
        <div className='three-num-box'>
          <div className='num-box'>0</div><div className='num-box'>7</div><div className='num-box'>1</div><div className='text'>None of these numbers<br /> are correct</div>
        </div>
      </div>

      <div className='text2'>What is the <strong>secret code</strong>?</div>

      <form className='center-form' onSubmit={onSubmit}>
        <input
          className='puzzle-input'
          type='number'
          value={answer}
          onChange={(e) => setAnswer(parseInt(e.target.value))}>
        </input>
        <button className='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Puzzle1