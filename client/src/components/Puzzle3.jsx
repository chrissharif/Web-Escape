import './Puzzle3.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Puzzle3(props) {

  const [answer, setAnswer] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    if (answer === 'tony' || answer === 'Tony') {
      props.setAnswer3(true)
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
      <h1>Puzzle 3</h1>
      <div className='timer'>{props.timer}</div>
      <nav className='links'>
        <Link to='/home'>
          <button className='puzzle-button'>Home</button>
        </Link>
      </nav>

      <div className='text'>Sally is having a family party today
        and it looks like the guests start arriving. <br />There are a
        lot of guests coming, so Sally had a tough time figuring
        out who <br />brought what food. Can you help Sally find out who
        brought the <strong>apple pie?</strong>
      </div>
      <div className='puzzle-container'>
        <div className='clue'>Sally's mother was first who brought the chicken wings.</div>
        <div className='clue'>The person after Sally's mother brought a crumb cake.</div>
        <div className='clue'>The fourth person who came was named Jerry.</div>
        <div className='clue'>The last person who came brought spinach dip.</div>
        <div className='clue'>Sally remembers that the chocolate pudding arrived right after the apple pie was placed on the table.</div>
        <div className='clue'>Sally's cousin May came two people before the last person and brought sangria.</div>
        <div className='clue'>The person who came 3 people after the person who brought the<br /> crumb cake prefers the nickname that comes from the name Anthony.</div>
        <div className='clue'>The <span className='secret'>third</span> person who came forgot their food at home.</div>
        <div className='clue'>Sally realized the apple pie was at the party before May came.</div>
        <div className='clue'>Before the apple pie arrived, there was a platter of fruit on the table which someone brought.</div>
        <div className='clue'>The twins Harry and Barry came before May. They brought one dessert and one entree.</div>
        <div className='clue'>A total of 11 people were at the party.</div>
      </div>

      <form className='center-form' onSubmit={onSubmit}>
        <input
          className='puzzle-input'
          type='text'
          value={answer}
          onChange={(e) => setAnswer((e.target.value))}
          placeholder='Answer'>
        </input>
        <button className='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Puzzle3