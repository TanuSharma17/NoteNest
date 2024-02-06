import React from 'react';
import logo from './Images/TanuLogo.jpg';
import './index.css';

const Header = ()=>{
    return(
        <>
         <div className='head'>
            <img src={logo} alt="logo" height='60' width='100' />
            <h1> Tanu Keep</h1>
         </div>
          
        </>
    );
};

export default Header;