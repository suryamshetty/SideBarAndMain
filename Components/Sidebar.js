import React from 'react';


export default function Sidebar ({onSelect}){
    return(
        <div>
            <ul>
                <li onClick={()=>onSelect('Home')}>Home</li>
                <li onClick={()=>onSelect('About')}>About</li>
                <li onClick={()=>onSelect('Contact')}>Contact</li>
            </ul>
        </div>
    );
};

