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
            <div className='nav bg-black flex justify-between items-center px-2'>
                <div className='p-4 flex' >
                    <img className='logo pr-4'
                        src={logo}
                        alt="" />
                    <h2 className='nav-heading text-white text-4xl' > MediCare Plus </h2>
                </div>
                <div className='text-white' >
                    <Link className='p-2 uppercase'
                        to='/home'>Home</Link>
                    <Link className='p-2 uppercase'
                        to='/services'>Services</Link>
                    <Link className='p-2 uppercase'
                        to="/price">Prices</Link>
                    <Link className='p-2 uppercase'
                        to='/contact'>Contact Us</Link>
                    {user?.email ?
                        <button onClick={logOut}
                            data-modal-toggle="example2"
                            data-modal-action="open"
                            className="bg-purple-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2 uppercase">Logout </button> :
                        <Link to='/login' >
                            < button
                                data-modal-toggle="example2"
                                data-modal-action="open"
                                className="bg-purple-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2 uppercase" >
                                Login</button></Link>}
                    <p className='inline' > signed in as: {user?.displayName} </p>
                </div>
            </div>
            <div>
                <Slider> </Slider>
            </div>
        </div>
    );
};

export default Header;