import './Leaderboard.css'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`

function Leaderboard(props) {
  
  const [post, setPost] = useState('')
  
  let ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  let posts = []
  for (let i = 0; i < post.length; i++) {
    posts.push(post[i].fields)
  
  }
  
    useEffect(() => {
      fetchData()
    }, [])
  
    async function fetchData() {
      const response = await axios.get(URL, {
        headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}
      })
      // console.log(response.data.records)
      setPost(response.data.records)
      console.log(post)
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
          <div className='entry name'>{post[0].fields.name}</div>
          <div className='entry rank'>{ranks[0]}</div>
          <div className='entry time'>{post[0].fields.time}</div>
          <div className='entry date'>{post[0].createdTime.substr(0, 10)}</div>
        </div>

        <div className='row'>
          <div className='entry name'>{post[7].fields.name}</div>
          <div className='entry rank'>{ranks[1]}</div>
          <div className='entry time'>{post[7].fields.time}</div>
          <div className='entry date'>{post[7].createdTime.substr(0, 10)}</div>
        </div>

      </div>
      </div>

  </div>
  )
}

export default Leaderboard