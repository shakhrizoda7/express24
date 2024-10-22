import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center gap-3 min-vh-100'>
        <div className='display-3'>Sign in</div>
        <Link to='/login'>
            <button className="btn btn-warning">Sign in</button>
        </Link>
    </div>
  )
}
