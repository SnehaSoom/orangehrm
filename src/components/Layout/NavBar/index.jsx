import React, {useState} from 'react';
import './NavBar.css'
import { Menu, ProfileIcon, DownIcon } from '../../../App/Assests';


export default function NavBarIndex({
  onClick
}) {

  const [menuSize, setMenuSize] = useState(25);
  return (
    <>
      <div className='navigation-container'>
        <button className='menu-button' onClick={onClick} onMouseEnter={()=> setMenuSize(35)} onMouseLeave={()=> setMenuSize(25)}>
          <Menu size={menuSize} />
        </button>
        <div className='profile-container'>
          <ProfileIcon  size={50}/><span className='username'>Shubham Shirse</span><DownIcon size={25}/>
        </div>
      </div>
    </>
  )
}
