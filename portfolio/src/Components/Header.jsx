import React from 'react'
import { MdHeight } from 'react-icons/md'

const Header = () => {
  return (
    <header className='header'>
    <div className='header-content'>
      <img src="/src/komala1.jpg" alt="komala image"  style={{ width: '200px',height:'200px',objectFit:'cover',borderRadius:'50%' }}/>
        <h1> Hi, I'm <span>Komala</span></h1>
        <h2>Frontend Developer</h2>
        <p> I build beautiful, responsive websites</p>
        <a href='#contact' className='btn'>Contact Me!</a>  
    </div>
    </header>
  )
}

export default Header



