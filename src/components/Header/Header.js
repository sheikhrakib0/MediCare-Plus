import React from 'react';
import './Header.css';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <div className='nav bg-black flex justify-between items-center'>
                <div className='p-4 flex'>
                    <img className='logo pr-4' src={logo} alt="" />
                    <h2 className='text-white text-4xl'>MediCare Plus</h2>
                </div>
                <div className='text-white'>
                    <Link className='p-2 uppercase' to='/home'>Home</Link>
                    <Link className='p-2 uppercase' to='/services'>Services</Link>
                    <Link className='p-2 uppercase' to="/price">Prices</Link>
                    <Link className='p-2 uppercase' to='/about'>About Us</Link>
                </div>
            </div>
    </div>
  );
};

export default Header;