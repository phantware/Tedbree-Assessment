import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './loginright.css'

const LoginRight = ({ user }) => {
  let navigate = useNavigate()
  console.log('user from loginright', user)
  // useEffect(() => {
  //   if (user) {
  //     navigate('/')
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user])
  return (
    <div className='login-right-main'>
      <div className='eclipse'>
        <img
          className='login-right-img-1'
          src='assets/images/Ellipse1.svg'
          alt='ellipse 1'
        />
        <img
          className='login-right-img-2'
          src='assets/images/Ellipse2.svg'
          alt='ellipse 2'
        />
        <img
          className='login-right-img-3'
          src='assets/images/Ellipse3.svg'
          alt='ellipse 3'
        />
      </div>
      <form className='login-right-form'>
        <h1 className='login-right-desc'>Login</h1>
        <div className='login-right-form-input'>
          <p>Email</p>
          <input type='email' className='login-right-form-inputs' />
        </div>
        <div className='login-right-form-input'>
          <p>Password</p>
          <input type='password' className='login-right-form-inputs' />
        </div>
        <button type='button' className='btn-submit-right' onClick={user}>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginRight
