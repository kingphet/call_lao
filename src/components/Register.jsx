import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function Register() {
    return (
        <>
            <div className="flex flex-col pt-10 gap-5">
                <div className="bg-[#757575] rounded-2xl text-white font-bold flex items-center justify-center py-3 gap-3">
                    <FcGoogle className='text-[2rem]' />
                    <p>Sign Up with Google</p>
                </div>
                <div className="border-2 border-black rounded-2xl font-bold flex items-center justify-center py-3 gap-3">
                    <FaApple className='text-[2rem]' />
                    <p>Sign Up with Apple</p>
                </div>
            </div>
        </>
    )
}

export default Register
