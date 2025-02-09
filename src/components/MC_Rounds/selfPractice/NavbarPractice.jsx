import React, { useState } from 'react';
import './NavbarPracticeStyle.css';

const NavbarPractice = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }


  return (
    <nav className='navbar'> 
        <div>
Rao Sahab
        </div>

        <div className='hamburger' onClick={handleToggle}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
            
        </div>

        
            <ul className={isOpen ? 'mob' : 'web'}>
                <li>
                    FORTUNER
                </li>
                <li>
                    BMW
                </li>
                <li>
                    OPEN JEEP
                </li>
                <li>
                    BULLET
                </li>
            </ul>
            
       
    </nav>
  )
}

export default NavbarPractice