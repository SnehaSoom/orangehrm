import React, { useState } from 'react';
import ProfileSidebar from './component/ProfileSidebar';
import PersonalDetail from './component/PersonalDetail';
import ContactDetails from './component/ContactDetails';
import EmergencyContacts from './component/EmergencyContacts';
import Dependents from './component/Dependents';
import Job from './component/Job';
import Salary from './component/Salary';

export default function ProfileIndex({profile}) {

    const [selectedMenu, setSelectedMenu] = useState(null)

    const handleProfileSidebar = (name) => {
        console.log('selected==', name)
        setSelectedMenu(name)
    }

    const renderComponent = () => {
        switch(selectedMenu) {
            case 'personalDetails':
                return <PersonalDetail profile={profile} />;
            case 'contactDetails':
                return <ContactDetails profile={profile} />;
            case 'emergencyContacts':
                return <EmergencyContacts profile={profile} />;
            case 'dependents':
                return <Dependents profile={profile} />;
            case 'job':
                return <Job profile={profile} />;
            case 'salary':
                return <Salary profile={profile} />;
            default:
                return null;
        }
    }

    return (
        <div className='profile-sidebar-main-container'>
            <div className='profile-sidebar-container'>
                <ProfileSidebar selectedMenu={selectedMenu} profile={profile} onClick={(name) => handleProfileSidebar(name)}/>
            </div>
            <div>
                {renderComponent()}
            </div>
        </div>
    )
}
