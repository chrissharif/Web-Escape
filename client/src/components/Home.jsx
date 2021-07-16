import './Home.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {

  let correct = 'lock-semicircle unlock'
  let lock = 'lock-semicircle'

  function checkForWin() {
    if (props.answer1 === true && props.answer2 === true && props.answer3 === true && props.answer4 === true) {
      return (
        <div className='escape'>
          <Link className='finish' to='/win'>
            <button className='puzzle-button'>Escape the Web!</button>
          </Link>
        </div>
      )
    }
  }

  if (props.timer === 900) {
    clearInterval(props.int)
    return (
      <div>
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
    <div className='body page'>
      <header>
        <h1>Web Escape</h1>
      </header>
      <div className='timer'>{props.timer}</div>
      <nav className='links'>
        
      <Link to='/puzzle1'>
        <button className='puzzle-button'>Puzzle 1</button>
      </Link>
      
      <Link to='/puzzle2'>
        <button className='puzzle-button'>Puzzle 2</button>
      </Link>
        
      <Link to='/puzzle3'>
        <button className='puzzle-button'>Puzzle 3</button>
      </Link>
        
      <Link to='/puzzle4'>
        <button className='puzzle-button'>Puzzle 4</button>
      </Link>
        
      </nav>

      <div className='locks'>

      <div className='lock'>
          <div className={props.answer1 ? correct : lock}></div>
          <div className='number color1'><strong>4</strong></div>
        <div className='base'>
          <div className='lock-top'></div>
          <div className='lock-bottom'></div>
        </div>
        </div>
        
        <div className='lock'>
        <div className={props.answer2 ? correct : lock}></div>
        <div className='number color2'><strong>7</strong></div>
        <div className='base'>
          <div className='lock-top'></div>
          <div className='lock-bottom'></div>
        </div>
        </div>
        
        <div className='lock'>
          <div className={props.answer3 ? correct : lock}></div>
          <div className='number color3'><strong>1</strong></div>
        <div className='base'>
          <div className='lock-top'></div>
          <div className='lock-bottom'></div>
        </div>
        </div>
        
        <div className='lock'>
          <div className={props.answer4 ? correct : 'lock-semicircle2'}></div>
          <div className='number'></div>
        <div className='base'>
          <div className='lock-top'></div>
          <div className='lock-bottom'></div>
        </div>
        </div>
        
      </div>

      {checkForWin()}

    </div>
  )
}

export default Home