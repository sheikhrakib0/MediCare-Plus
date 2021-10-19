import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            {/* Latest service  */}
            
            <h2 className='text-2xl font-bold text-center uppercase p-4 text-blue-600'>Our Latest Services</h2>
            <div className='container mx-auto grid grid-cols-2 gap-4 md:grid-cols-3'>
                {
                    services.slice(0, 3).map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <Link className='flex justify-center p-4' to='/services'>
                <button
                    data-modal-toggle="example2"
                    data-modal-action="open"
                    className="bg-purple-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"
                >
                    All Services
                </button>
            </Link>

            {/* map section  */}
            <div>
                <section className="text-gray-600 body-font relative">
                    <div className="absolute inset-0 bg-gray-300">

                        <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193747.65734576355!2d-74.08508155679834!3d40.645159363485455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1634609309122!5m2!1sen!2sbd"></iframe>
                    </div>
                    <div className="container px-5 py-24 mx-auto flex">
                        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg px-4 py-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Stay In Touch</h2>
                            <p className="leading-relaxed mb-5 text-gray-600">1148 Williams Avenue, Brooklyn, NewYork, USA</p>
                            <div className="relative mb-4">

                                <form className="flex">
                                    <input className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com" />
                                    <button className="px-2 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe</button>
                                </form>

                            </div>
                            <p className="text-xs text-gray-500 mt-3">Feel free to contact us</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Appointment section  */}

            <div className='flex justify-center' id="appoinment">
                <div className="leading-loose">
                    <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                        <p className="text-gray-800 text-4xl font-bold">Appointment Form</p>
                        <p className='text-xl py-2'>Don't Waste Your Time, Make It Online</p>
                        <div className="">
                            <label className="block text-sm text-gray-00" for="cus_name">Name</label>
                            <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name"/>
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600" for="cus_email">Email</label>
                            <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email"/>
                        </div>
                        <div className="mt-2">
                            <label className=" block text-sm text-gray-600" for="cus_email">Address</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email"/>
                        </div>
                        <div className="mt-2">
                            <label className="hidden text-sm block text-gray-600" for="cus_email">Phone</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Phone" aria-label="phone"/>
                        </div>
                        <p className="mt-4 text-gray-800 font-medium">Your Message</p>
                        <div className="">
                            <textarea className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Message" aria-label="Name"/>
                        </div>
                        <div className="mt-4">
                            <button className="px-4 py-1 text-white font-light tracking-wider bg-purple-700 rounded" type="submit">Submit Your Request</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Home;