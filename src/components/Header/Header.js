import React from 'react';
import './Header.css';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
  const { user, logOut } = useAuth();
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
          <Link className='p-2 uppercase' to='/contact'>Contact Us</Link>
          {user?.email ?
            <button onClick={logOut} className='p-2 uppercase'>Logout</button> :
            <Link to='/login'><button className='p-2 uppercase'>Login</button></Link>}
          <p className='inline'>signed in as: {user?.displayName}</p>
        </div>
      </div>
  <div>
    <Slider></Slider>
  </div>
    </div >
  );
};

export default Header;