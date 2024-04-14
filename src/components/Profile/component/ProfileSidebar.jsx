import React from 'react';


const sidebarList = [
    { 'label': 'Personal Details', 'value': 'personalDetails' },
    { 'label': 'Contact Details', 'value': 'contactDetails' },
    { 'label': 'Emergency Contacts', 'value': 'emergencyContacts' },
    { 'label': 'Dependents', 'value': 'dependents' },
    { 'label': 'Immigration', 'value': 'immigration' },
    { 'label': 'Job', 'value': 'job' },
    { 'label': 'Salary', 'value': 'salary' },
    { 'label': 'Report-to', 'value': 'reportTo' },
    { 'label': 'Qualifications', 'value': 'qualifications' }
]

export default function ProfileSidebar({ profile, onClick, selectedMenu }) {
    return (
        <div>
            <div className='profile-dp-container'>
                <div className='profile-dp-name'>
                    <h3>{profile}</h3>
                </div>
                <div className='profile-dp'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                        <path fill="#afb3b0" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className='profile-menu-container'>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {
                        sidebarList.map((ele, index) => (
                            <li className={selectedMenu == ele.value ? 'profileList-selected'  :'profileList'} onClick={() => onClick(ele.value)} >{ele.label}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
