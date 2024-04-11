import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBarIndex from './NavBar';
import SideBar from './SideBar/SideBar';
import './Layout.css'

export default function LayoutIndex() {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(1);

    const handleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }

    const handleActiveSideBar = (index) => {
        setActiveIndex(index);
        // setIsSideBarOpen(false);
    }
    return (
        <>
            <div className='layout-container'>
                <div className='navbar-container'>
                    <NavBarIndex onClick={() => { handleSideBar() }} />
                </div>
                {isSideBarOpen && <SideBar onClose={() => {handleSideBar()}} onClick={(index)=> handleActiveSideBar(index)} activeIndex={activeIndex} />}
                <div className='content-container' style={{ paddingLeft: isSideBarOpen? '350px' : '20px', paddingRight: '20px', width: isSideBarOpen? '72.5%' : '96.5%' }}>
                    <Outlet />
                </div>

            </div>
        </>
    )
}
