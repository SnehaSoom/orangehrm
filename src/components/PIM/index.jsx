import React from 'react';
import './PIM.css';
import MenuBar from './component/MenuBar';
import AddEmployee from './component/AddEmployee';
import EmployeeList from './component/EmployeeList';

export default function PIMIndex() {

    const [selectedItem, setSelectedItem] = React.useState('employeeList');

    const onButtonClick = (name) => {
        console.log(name);
        setSelectedItem(name);
    }

    return (
        <>
            <MenuBar onButtonClick={(name) => onButtonClick(name)} />
            <div>
                {selectedItem === 'addEmployee' ? < AddEmployee />
                    :
                    selectedItem === 'employeeList' ? <EmployeeList />
                        : null}
            </div>
        </>
    )
}
