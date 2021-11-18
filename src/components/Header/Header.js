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
      <div>
        <nav class="flex items-center justify-between flex-wrap bg-black text-white p-6">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <img src={logo} alt='logo' class="fill-current h-8 w-8 mr-2" width="54" height="54" />
            <span class="font-semibold text-xl tracking-tight">Medicare Plus</span>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <Link to="/home" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 uppercase">
                Home
              </Link>
              <Link to='/services' class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 uppercase">
                Services
              </Link>
              <Link to="/price" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 uppercase">
                Price
              </Link>
              <Link to='/contact' class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white uppercase">
                Contact Us
              </Link>
            </div>
            <div>
              {user?.email ?
                <div>
                  <button onClick={logOut}
                  data-modal-toggle="example2"
                  data-modal-action="open"
                  className="bg-purple-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2 uppercase">Logout </button> 
                  <p className='inline'>Signed in as: {user?.displayName}</p> 
                </div>:
                <Link to='/login' >
                  < button
                    data-modal-toggle="example2"
                    data-modal-action="open"
                    className="bg-purple-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2 uppercase" >
                    Login</button></Link>}
            </div>
          </div>
        </nav>
      </div>
      <div>
        <Slider> </Slider>
      </div>
    </div>
  );
};

export default Header;