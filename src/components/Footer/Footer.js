import React from 'react';


const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-700">
        <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href='/home' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-xl text-white">MEDICARE PLUS</span>
            </a>
            <p className="mt-2 text-sm text-white">Better Treatment Better Life</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">ABOUT US</h2>
              <nav className="list-none mb-10">
                <li>
                  <p className='text-white'>We are dedicated to our patients. We provide the best treatment</p>
                </li>
                <li>
                  <p className="text-white">We have advance technology and best doctors in the city</p>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">WORKING HOURS</h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-white">Mon-Fri: 10am - 6pm</p>
                </li>
                <li>
                  <p className="text-white">Saturday: 9am - 8pm</p>
                </li>
                <li>
                  <p className="text-white">Sunday: Closed</p>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">CONTACT US</h2>
              <nav className="list-none mb-10">
                <li>
                  <p className='text-white'>Phone: +1104378489</p>
                </li>
                <li>
                  <p className="text-white">Email: Kuddusli404@gmail.com</p>
                </li>
                <li>
                  <p className="text-white">Address: 1148 Williams Avenue, Brooklyn, NewYork, USA</p>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-900">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">© All rights reserved by Author, 2020
              <a href="/home" rel="noopener noreferrer" className="text-gray-400 ml-1" target="_blank">Medicare Plus</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;