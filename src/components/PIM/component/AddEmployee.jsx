import React, { useState } from 'react';
import PageLayout from '../../Reusaable/PageLayout';
import SwitchCheckbox from '../../Reusaable/SwitchCheckbox';

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
            <label htmlFor="fullName">Full Name :</label>
            <div className='triple-input'>
              <input type="text" id="fullName" placeholder='Full Name' name="fullName" />
              <input type="text" id="middleName" placeholder='Middle Name' name="middleName" />
              <input type="text" id="lastName" placeholder='Last Name' name="lastName" />
            </div>
            <div style={{marginTop : '20px'}}>
              <label style={{marginTop: '10px'}} htmlFor="employeeId">Employee ID :</label>
              <div style={{marginTop: '10px'}}>
                <input type="text" id="employeeId" placeholder='Employee Id' name="employeeId" />
              </div>
            </div>
            <div style={{marginTop: '10px', display : 'flex', alignItems : 'center'}}>
              <label style={{marginRight: '10px'}} htmlFor="toggle">Create Login Detail </label>
              <SwitchCheckbox/>
            </div>
          </div>
        </div>
        <hr color='#e1e3e1' style={{ marginTop: '50px' }} />
        <div style={{ marginTop: '10px', paddingLeft: '20px', paddingRight: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '14px' }}>* Required</span>
          <div>
            <button style={{ cursor: 'pointer', padding: '10px 25px 10px 25px', color: 'green', border: '1px solid green', borderRadius: '20px' }}>Cancel</button>
            &nbsp;&nbsp;&nbsp;
            <button style={{ cursor: 'pointer', padding: '10px 25px 10px 25px', color: 'white', backgroundColor: 'green', border: '1px solid green', borderRadius: '20px' }}>Save</button>
          </div>
        </div>
      </div>
    </PageLayout >
  );
};

export default AddEmployee;
