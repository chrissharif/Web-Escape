import './Leaderboard.css'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`

function Leaderboard() {
  
  const [posts, setPosts] = useState([])

  let rank = 1

  const formatDate = (string) => {
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    return new Date(string).toLocaleDateString([], options);
  };
  
  useEffect(() => {
    fetchData()
  }, [])
  
  async function fetchData() {
    const response = await axios.get(URL, {
      headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}
    })
    const sortedData = response.data.records.sort((a, b) => {
      return a.fields.time - b.fields.time
    })
    setPosts(sortedData)
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
          {posts.map((post) => (
            <div key={post.id} className='row'>
              <div className='entry name'>{post.fields.name}</div>
              <div className='entry rank'>{rank++}</div>
              <div className='entry time'>{post.fields.time}</div>
              <div className='entry date'>{formatDate(post.createdTime)}</div>
            </div>
          ))}
        </div>
      </div>

  </div>
  )
}

export default Leaderboard