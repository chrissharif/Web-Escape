import React from 'react'
import { Route, Link } from 'react-router-dom'
import Leaderboard from './Leaderboard'
import Puzzle1 from './Puzzle1'
import Puzzle2 from './Puzzle2'
import Puzzle3 from './Puzzle3'
import Puzzle4 from './Puzzle4'

function Home() {
  return (
    <div>
      <header>
        <h1>Web Escape</h1>
      </header>
      <nav>

      <Link to='/leaderboard'>
        <button>Leaderboard</button>
      </Link>
      <Route exact path='/leaderboard'>
        <Leaderboard />
      </Route>
        
      <Link to='/puzzle1'>
        <button>Puzzle 1</button>
      </Link>
      <Route exact path='/puzzle1'>
        <Puzzle1 />
      </Route>
        
      <Link to='/puzzle2'>
        <button>Puzzle 2</button>
      </Link>
      <Route exact path='/puzzle2'>
        <Puzzle2 />
      </Route>
        
      <Link to='/puzzle3'>
        <button>Puzzle 3</button>
      </Link>
      <Route exact path='/puzzle3'>
        <Puzzle3 />
      </Route>
        
      <Link to='/puzzle4'>
        <button>Puzzle 4</button>
      </Link>
      <Route exact path='/puzzle4'>
        <Puzzle4 />
      </Route>
      </nav>
    </div>
  )
}

export default Home