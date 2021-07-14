import './App.css';
import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Leaderboard from './components/Leaderboard'
import Puzzle1 from './components/Puzzle1'
import Puzzle2 from './components/Puzzle2'
import Puzzle3 from './components/Puzzle3'
import Puzzle4 from './components/Puzzle4'

function App() {

  return (
    <div>
      <Route exact path='/'>
      <header>
        <h1>Web Escape</h1>
          <h3>
            How to Play: <br /> <br />There are four locks that you will need
            to unlock by completing four puzzles. After each puzzle is
            complete, a lock will unlock. Complete all four puzzles
            before the timer runs out to win! Can you escape the web?
          </h3>
      </header>
        <Link to='/home'>
          <button>Play Game</button>
        </Link>
        <Link to='/leaderboard'>
          <button>Leaderboard</button>
        </Link>
      </Route>
      
      <Route exact path='/home'>
        <Home />
      </Route>
      
      <Route exact path='/leaderboard'>
        <Leaderboard />
      </Route>
        
      <Route exact path='/puzzle1'>
        <Puzzle1 />
      </Route>
        
      <Route exact path='/puzzle2'>
        <Puzzle2 />
      </Route>
        
      <Route exact path='/puzzle3'>
        <Puzzle3 />
      </Route>
        
      <Route exact path='/puzzle4'>
        <Puzzle4 />
      </Route>
    </div>
  );
}

export default App;
