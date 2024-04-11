import React from 'react';
import PageLayout from '../../Reusaable/PageLayout';

const EmployeeList = () => {
    return (
        <PageLayout>
            <div style={{ padding: '20px', borderRadius: '5px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Employee List</h2>
                {/* Your employee list rendering code goes here */}
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>Employee 1</li>
                    <li style={{ marginBottom: '10px' }}>Employee 2</li>
                    <li style={{ marginBottom: '10px' }}>Employee 3</li>
                    {/* Add more employees as needed */}
                </ul>
            </div>
        </PageLayout>

    );
};

export default EmployeeList;
