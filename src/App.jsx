import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttin from './components/login'


function App() {

  return (
    <>
      <div className="bg">
        <div className='content'>
          <div className='text'>Username</div>
          <div className='text'>Password</div>
        </div>
        <div className='btn'>
          <button className='text reg'>Submit</button>
          <button className='text reg'>Register</button>
        </div>
      </div>

      <section> <Buttin /></section>
    </>
  )
}

export default App
