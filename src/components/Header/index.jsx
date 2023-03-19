import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <Link to='/' class="app-name">MY POKEMON APP</Link>
    </header>
  )
}

export default Header