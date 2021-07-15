import './Home.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {

  let correct = 'lock-semicircle unlock'
  let lock = 'lock-semicircle'
  
  async function onSubmit(e) {
    e.preventDefault()
    if (props.answer1 === true && props.answer2 === true && props.answer3 === true && props.answer4 === true) {
      console.log('good')
    } else {
      console.log('bad')
    }
  }

  function checkForWin() {
    if (props.answer1 === true && props.answer2 === true && props.answer3 === true && props.answer4 === true) {
      return (
        <Link className='finish' to='/win'>
          <button>Escape the Web!</button>
        </Link>
      )
    } else {
      console.log('bad')
    }
  }

  return (
    <div>
      <header>
        <h1>Web Escape</h1>
      </header>
      <nav>
        
      <Link to='/puzzle1'>
        <button>Puzzle 1</button>
      </Link>
      
      <Link to='/puzzle2'>
        <button>Puzzle 2</button>
      </Link>
        
      <Link to='/puzzle3'>
        <button>Puzzle 3</button>
      </Link>
        
      <Link to='/puzzle4'>
        <button>Puzzle 4</button>
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