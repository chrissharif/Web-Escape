import './App.css';
import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './components/Home'

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
      </Route>
      <Route exact path='/home'>
        <Home />
      </Route>
    </div>
  );
}

export default App;
