import './Home.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
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
        <div className='lock-semicircle'></div>
        <div className='base'>
          <div className='lock-top'></div>
          <div className='lock-bottom'></div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Home