import './Leaderboard.css'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`

function Leaderboard() {
  
    const [post, setPost] = useState([])
  
    useEffect(() => {
      fetchData()
    }, [])
  
    async function fetchData() {
      const response = await axios.get(URL, {
        headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}
      })
      console.log(response)
      setPost(response.data.records)
    }

  return (
  <div>
      <h1>Leaderboard</h1>
      <nav className='links'>
        <Link to='/'>
          <button className='puzzle-button'>Start Page</button>
        </Link>
      </nav>

      <div className='board'>
      <div className='leaderboard'>

        <div className='row'>
          <div className='sample'>Name</div>
          <div className='sample'>Rank</div>
          <div className='sample'>Time</div>
          <div className='sample'>Date</div>
        </div>
          
        <div className='row'>
          <div className='entry name'>chris</div>
          <div className='entry rank'>1</div>
          <div className='entry time'>3min</div>
          <div className='entry date'>today</div>
        </div>

        <div className='row'>
            <div className='entry name'>{post.name}</div>
          <div className='entry rank'></div>
          <div className='entry time'></div>
          <div className='entry date'></div>
        </div>

      </div>
      </div>

  </div>
  )
}

export default Leaderboard