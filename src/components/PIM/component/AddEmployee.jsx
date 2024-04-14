import React, { useState } from 'react';
import PageLayout from '../../Reusaable/PageLayout';

const AddEmployee = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // Default male avatar image URL
  const defaultImageUrl = '/profilePic.png';

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };


  // Function to handle upload button click
  const handleUpload = () => {
    // Logic to upload the selected file
    console.log("Uploading profile picture:", selectedFile);
  };
  return (
    <PageLayout>
      <div>
        <div className='add-employee-container-header'>
          <h3>Add Employee</h3>
          <hr color='#e1e3e1' />
        </div>
        <div className='add-employee-container'>
          <div className='upload-pic-container'>
            <div className='upload-pic'>
              <div className="preview-container">
                <div className="preview">
                  {selectedFile ? (
                    <img src={selectedFile} alt="Selected" />
                  ) : (
                    <img src={defaultImageUrl} alt="Default" />
                  )}
                  {/* <button onClick={handleUpload}>Upload Profile Pic</button> */}
                </div>
                <div className='upload-btn'>
                  <label htmlFor="photo">+</label>
                  <input type="file" id="photo" name="photo" accept="image/*" onChange={handleFileChange} />
                </div>
              </div>
            </div>
            <div style={{
              display: 'flex', justifyContent: 'center', padding: '20px', textAlign: 'center'
            }}>
              <span style={{ fontSize: '10px', color: 'gray' }}>Accepts jpg, png, .gif up to 1MB. Recommended
                dimensions: 200px X 200px</span>
            </div>
          </div>
          <div>
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
        </div>
        <hr color='#e1e3e1' style={{marginTop : '50px'}} />
        <div style={{marginTop : '10px', paddingLeft : '20px', paddingRight : '20px', display: 'flex', justifyContent : 'space-between'}}>
          <span>* Required</span>
          <div>
            <button style={{padding : '10px 25px 10px 25px', color : 'green', border : '1px solid green', borderRadius : '20px'}}>Cancel</button>
            &nbsp;&nbsp;&nbsp;
            <button style={{padding : '10px 25px 10px 25px', color : 'white', backgroundColor : 'green', border : '1px solid green', borderRadius : '20px'}}>Save</button>
          </div>
        </div>
      </div>
    </PageLayout >
  );
};

export default AddEmployee;
