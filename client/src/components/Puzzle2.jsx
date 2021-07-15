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

  return (
    <div>
      <h1>Puzzle 2</h1>
      <nav>
        <Link to='/home'>
          <button>Home</button>
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
            <div className='equal-sign'>=</div>8
          </div>
        </div>
      </div>

        <div className='text'>What is the value of the green <strong>rhombus</strong>?</div>

      <form onSubmit={onSubmit}>
        <input
          type='number'
          value={answer}
          onChange={(e) => setAnswer(parseInt(e.target.value))}>
        </input>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default Puzzle2