import React, { useState } from 'react';
import PageLayout from '../../Reusaable/PageLayout';
import ProfileIndex from '../../Profile';

const EmployeeList = () => {

    const [openSideBar, setOpenSideBar] = useState(null)

    const handleOpenProfile = (index) => {
        console.log(index);
        setOpenSideBar(index)
    }
    return (
        <PageLayout>
            {!openSideBar ? <div style={{ padding: '20px', borderRadius: '5px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Employee List</h2>
                {/* Your employee list rendering code goes here */}
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li className='profileList' onClick={() => handleOpenProfile('Chahal Singh')}>Chahal Singh</li>
                    <li className='profileList' onClick={() => handleOpenProfile('Kumar Singh')}>Kumar Singh</li>
                    <li className='profileList' onClick={() => handleOpenProfile('David Kumble')}>David Kumble</li>
                    {/* Add more employees as needed */}
                </ul>
            </div> :
                <ProfileIndex profile={openSideBar} />
            }
        </PageLayout>

    );
};

export default EmployeeList;
