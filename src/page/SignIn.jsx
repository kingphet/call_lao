import React from 'react'
import Nav from '../layout/Nav'
import Register from '../components/Register'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div>
      <Nav />
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="w-auto h-auto p-20 lg:shadow-[20px_30px_40px_10px_rgba(0,0,0,0.3)] pt-0">
          <div className="flex items-center justify-center py-9">
            <p className='text-[3rem] font-bold text-[#EB993D]'>Sign</p>
            <p className='text-[3rem] font-bold text-[#0F2484]'>Up</p>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <p>Name</p>
              <input type="text" placeholder='Enter your name' className='w-96 h-12 md:w-[30rem] border-2 border-[#0F2484] rounded-3xl pl-3 ' />
            </div>
            <div>
              <p>E-mail</p>
              <input type="email" placeholder='Enter your email' className='w-96 h-12 md:w-[30rem] border-2 border-[#0F2484] rounded-3xl pl-3 ' />
            </div>
            <div>
              <p>Password</p>
              <input type="password" placeholder='Enter your password' className='w-96 h-12 md:w-[30rem] border-2 border-[#0F2484] rounded-3xl pl-3 ' />
            </div>
          </div>
          <div className="flex gap-1 py-5">
            <input type="checkbox" />
            <label className='text-[#2871E6] underline'>Term and Condition</label>
          </div>
          <Link to="/Welcome">
            <div className=" flex justify-center">
              <button className='bg-[#0F2484] text-white text-[1.5rem] py-2 px-[38%] rounded-3xl transition hover:bg-[#0323b5]'>SignUp</button>
            </div>
          </Link>
          <Register />
        </div>
      </div>
    </div>
  )
}

export default SignIn

