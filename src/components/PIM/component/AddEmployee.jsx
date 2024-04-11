import React from 'react';
import PageLayout from '../../Reusaable/PageLayout';

const AddEmployee = () => {
  return (
    <PageLayout>
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2>Main Content</h2>
          <hr />
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <h3>Photo Upload</h3>
            {/* Photo uploading functionality */}
            <div>
              <label htmlFor="photo">Upload Photo:</label>
              <input type="file" id="photo" name="photo" accept="image/*" />
            </div>
            <h3>Personal Information</h3>
            {/* Personal information fields */}
            <div>
              <label htmlFor="fullName">Full Name:</label>
              <input type="text" id="fullName" name="fullName" />
            </div>
            <div>
              <label htmlFor="middleName">Middle Name:</label>
              <input type="text" id="middleName" name="middleName" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" />
            </div>
            <div>
              <label htmlFor="employeeId">Employee ID:</label>
              <input type="text" id="employeeId" name="employeeId" />
            </div>
            <div>
              <label htmlFor="toggle">Toggle:</label>
              <input type="checkbox" id="toggle" name="toggle" />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            {/* Right content */}
          </div>
        </div>
        <hr />
      </div>
    </PageLayout>
  );
};

export default AddEmployee;
