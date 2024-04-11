import React from 'react';
import "./MainContainer.css";

const MainContainer = () => {
  return (
    
<div className="main-container">
      <div className="main-header">
        <h2>Main Content</h2>
        <hr />
      </div>
      <div className="main-content">
        <div className="left">
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
        <div className="right">
          {/* Right content */}
        </div>
      </div>
      <hr />
//     </div>
  );
};

export default MainContainer;

