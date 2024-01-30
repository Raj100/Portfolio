import React from 'react'
import "./ErrorPage.css"
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='Error-Page'>
      <h1>There seem some mistake in the url</h1>
       <Link to="/"><button>Home Page</button></Link>
    </div>
  )
}

export default ErrorPage
