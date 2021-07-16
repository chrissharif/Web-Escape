import './App.css';
import React, {useState, useEffect} from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Leaderboard from './components/Leaderboard'
import Puzzle1 from './components/Puzzle1'
import Puzzle2 from './components/Puzzle2'
import Puzzle3 from './components/Puzzle3'
import Puzzle4 from './components/Puzzle4'
import Win from './components/Win'

function App() {

  const [answer1, setAnswer1] = useState(false)
  const [answer2, setAnswer2] = useState(false)
  const [answer3, setAnswer3] = useState(false)
  const [answer4, setAnswer4] = useState(false)
  let [timer, setTimer] = useState(0)
  const [int, setInt] = useState(null)
  
  function startTimer() {
    let timeInterval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)
    setInt(timeInterval)
  }

  return (
    <div className='page'>
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
        <div className='links'>
        <Link onClick={startTimer} to='/home'>
          <button className='puzzle-button'>Play Game</button>
        </Link>
        <Link to='/leaderboard'>
          <button className='puzzle-button'>Leaderboard</button>
          </Link>
        </div>
      </Route>
      
      <Route exact path='/home'>
        <Home timer={timer} int={int} answer1={answer1} answer2={answer2} answer3={answer3} answer4={answer4}/>
      </Route>
      
      <Route exact path='/leaderboard'>
        <Leaderboard />
      </Route>
        
      <Route exact path='/puzzle1'>
        <Puzzle1 timer={timer} int={int} setAnswer1={setAnswer1}/>
      </Route>
        
      <Route exact path='/puzzle2'>
        <Puzzle2 timer={timer} int={int} setAnswer2={setAnswer2}/>
      </Route>
        
      <Route exact path='/puzzle3'>
        <Puzzle3 timer={timer} int={int} setAnswer3={setAnswer3}/>
      </Route>
        
      <Route exact path='/puzzle4'>
        <Puzzle4 timer={timer} int={int} setAnswer4={setAnswer4}/>
      </Route>

      <Route exact path='/win'>
        <Win int={int} timer={timer} setTimer={setTimer}/>
      </Route>
    </div>
  );
}

export default App;
