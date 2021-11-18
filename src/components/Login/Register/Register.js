import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
  const {signInUsingEmail, error, setError} = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const history = useHistory();


  const handleRegistration = (e) => {
    e.preventDefault();
    if(password.length < 6){
      setError('Password should be at least 6 characters,')
      return ;
    }
    else{
      signInUsingEmail(email, password, name, history);
    }
    
  }

  const handleNameChange = e =>{
    setName(e.target.value);
  }

  const handleEmailInput= (e)=>{
    setEmail(e.target.value);
  }

  const handlePasswordInput = (event) =>{
    setPassword(event.target.value);
  }

  return (
    <div className="font-mono bg-gray-200">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">

            <div
              className="w-full h-auto bg-gray-200 lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{ backgroundImage: `url('https://source.unsplash.com/random')` }}
            ></div>

            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                      Full Name
                    </label>
                    <input onChange={handleNameChange}
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <input onChange={handleEmailInput}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email" required
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                      Password
                    </label>
                    <input onChange={handlePasswordInput}
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="*************" required
                    />
                    <p className="text-xs italic text-red-500">Please choose a password.</p>
                  </div>
                </div>
                <p>{error}</p>
                <div className="mb-6 text-center">
                  <button onClick={handleRegistration}
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link to=''>
                    <span
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    >
                      Forgot Password?
                    </span>
                  </Link>
                </div>
                <div className="text-center">
                  <p className='text-sm'>Already have an account?
                    <Link to='/login'>
                      <span
                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      >
                        Login!
                      </span>
                    </Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Register;