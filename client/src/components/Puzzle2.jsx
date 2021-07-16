import './Puzzle2.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Puzzle2(props) {

  const [answer, setAnswer] = useState(0)

  async function onSubmit(e) {
    e.preventDefault()
    if (answer === 3) {
      props.setAnswer2(true)
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
      <h1>Puzzle 2</h1>
      <div className='timer'>{props.timer}</div>
      <nav className='links'>
        <Link to='/home'>
          <button className='puzzle-button'>Home</button>
        </Link>
      </nav>

        <div className='text'>Each geometric shape below
          has a numerical value. The goal is to figure out<br />
          which shape equals what number and finally calculate
          the value of the <strong>rhombus</strong>.</div>
      <div className='puzzle-container'>
        <div className='individual'>
          <div className='circle'></div>+
          <div className='circle'></div>
          <div className='equal-sign'>=</div>4
        </div>
        <div className='individual'>
          <div className='square'></div>x
          <div className='circle'></div>
          <div className='equal-sign'>=</div>1
          <div className='secret'>6</div>
        </div>
        <div className='individual'>
          <div className='circle'></div>
          <div className='plus-sign'>+</div>
          (<div className='square'></div>x
          <div className='triangle'></div>)
          <div className='equal-sign'>=</div>170
        </div>
        <div className='individual'>
          (<div className='rhombus'></div>x
          <div className='triangle'></div>)
          <div className='divide-sign'>÷</div>
          <div className='page-break'>
            (<div className='square'></div>
            <div className='equal-sign'>+</div>
            (1/2<div className='circle'></div>))
            <div className='equal-sign'>=</div>7
          </div>
        </div>
      </div>

        <div className='text'>What is the value of the green <strong>rhombus</strong>?</div>

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

export default Puzzle2