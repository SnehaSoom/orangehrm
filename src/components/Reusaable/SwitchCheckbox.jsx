import React, { useState } from 'react';
import './SwitchCheckbox.css'; // Import your CSS file

function SwitchCheckbox({ isChecked: initialChecked }) {
    const [isChecked, setIsChecked] = useState(initialChecked || false);

    const handleChange = () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <div className="slider"></div>
      </label>
    );
}

export default SwitchCheckbox;
