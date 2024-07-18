import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/register'
import Update from './components/updates'

function App() {

  return (
    <>

    <div className="bg">
      <div className='firstcomp'>
        <div className='nav'>
          <div className='logo'>Logo</div>
          <div className='search'>Search</div>
          
        </div>
        <div className='profile'>
          <div className='image'>img</div>
          <div>Name Surname</div>
          <div>Position</div>
          <div className='logout'>
            <button>Delete</button>
            <button>Logout</button>
          </div>
        </div>
      </div>
      
      {/* Second Component */}
      <Register/>
      {/* Thirth Component */}
      <Update/>
    </div>
    

      {/* <BrowserRouter> <Buttin className="try"/>
        <Routes>
          <Routes index element = {<App/>}/>
          <Routes element = {<Register/>}/>
          <Routes element = {<Buttin/>}/>
          <Routes element = {<Landpage/>}/>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
