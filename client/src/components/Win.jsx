import './Win.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory, Link} from 'react-router-dom'

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`

function Win(props) {

  const [name, setName] = useState('')
  const [time, setTime] = useState(0)
  let history = useHistory()

  useEffect(() => {
    setTime(props.timer)
    clearInterval(props.int)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    const fields = {
      name,
      time
    }
    const response = await axios.post(URL,
      { fields }, 
      {headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}
    })
    console.log(response)
    history.push(`/leaderboard`)
  }

  return (
    <div className='page'>
      <h1 className='win-text'>You escaped! You finished in {time} seconds.<br />
        Put yourself on the Leaderboard to see where you place!</h1>
      <form onSubmit={handleSubmit} className='post'>
        <div className='line'>
          <label className='text'>Name</label>
          <input
            className='name-input'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='name'>
          </input>
        </div>
        <button className='submit'>Submit</button>
      </form>
      <div className='links'>
        <Link to='/leaderboard'>
          <button className='leaderboard-button'>Leaderboard</button>
        </Link>
      </div>
    </div>
  )
}

export default Win