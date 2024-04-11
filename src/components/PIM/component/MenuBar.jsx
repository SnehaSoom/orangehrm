import React, {useState} from 'react';
import './../PIM.css'

const menuList = [
    {
        type: 'select',
        name: 'configuration',
        label: 'Configuration',
        option: [
            {
                value: 'dashboard',
                label: 'Dashboard',
            },
            {
                value: 'dashboard2',
                label: 'Dashboard2',
            }
        ]

    },
    {
        type: 'button',
        name: 'employeeList',
        label: 'Employee List',
    },
    {
        type: 'button',
        name: 'addEmployee',
        label: 'Add Employee',
    },
    {
        type: 'button',
        name: 'Reports',
        label: 'Reports',
    }
]

export default function MenuBar({ onSelectChange, onButtonClick }) {
    return (
        <>
            <div>
                <RenderMenu menuList={menuList} onSelectChange={(name, value) => onSelectChange(name, value)} onButtonClick={(name)=> onButtonClick(name)} />
            </div>
        </>
    )
}


export const RenderMenu = ({ menuList, onSelectChange, onButtonClick }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    onSelectChange(name, value);
    setSelectedItem(name);
  };

  const handleButtonClick = (name) => {
    onButtonClick(name);
    setSelectedItem(name);
  };

  const renderMenuItems = () => {
    return menuList.map((item, index) => {
      if (item.type === 'select') {
        return (
          <div key={index} className="pim-select-container">
            {/* <label>{item.label}</label> */}
            <select
              name={item.name}
              onChange={handleSelectChange}
              className={selectedItem === item.name ? 'pim-selected' : 'pim-menu-button'}
            >
              {item.option.map((opt, i) => (
                <option key={i} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        );
      } else if (item.type === 'button') {
        return (
          <button
            key={index}
            name={item.name}
            onClick={() => handleButtonClick(item.name)}
            className={selectedItem === item.name ? 'pim-selected' : 'pim-menu-button'}
          >
            {item.label}
          </button>
        );
      }
      return null;
    });
  };

  return <div className='pim-menu-bar'>{renderMenuItems()}</div>;
}



