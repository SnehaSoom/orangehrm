import React from 'react';
import './PIM.css';
import MenuBar from './component/MenuBar';

export default function PIMIndex() {

    const onButtonClick = (name) => {
        console.log(name);
    }

    return (
        <>
            <MenuBar onButtonClick={(name)=> onButtonClick(name)} />
            <div>
                
            </div>
        </>
    )
}
