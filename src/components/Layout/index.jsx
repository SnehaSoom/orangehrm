import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBarIndex from './NavBar';
import SideBar from './SideBar/SideBar';
import './Layout.css'

export default function LayoutIndex() {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const handleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }
    return (
        <>
            <div className='layout-container'>
                <div className='navbar-container'>
                    <NavBarIndex onClick={() => { handleSideBar() }} />
                </div>
                {isSideBarOpen && <SideBar />}
                <div>
                    <Outlet />
                </div>

            </div>
        </>
    )
}
