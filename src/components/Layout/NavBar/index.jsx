import React from 'react';
import './NavBar.css'

export default function NavBarIndex({
  onClick
}) {
  return (
    <>
      <div className='navigation-container'>
        <p onClick={onClick}>Logo</p>
      </div>
    </>
  )
}
