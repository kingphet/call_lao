import React from 'react'
import Logo from '../../public/images/callLao_default_logo.png'
import { Link } from 'react-router-dom'
import Nav from '../layout/Nav'

function Welcome() {
    return (
        <>
            <Nav/>
            <div className="flex justify-center">
                <div className="flex items-center justify-around w-full">
                    <div className="flex flex-col gap-16">
                        <div className="text-center text-[4rem] sm:text-[5.7rem] lg:text-[8rem] font-bold">
                            <p className='text-[#0F2484]'>CallLao</p>
                            <p className='text-[#C3A356]'>Translator</p>
                        </div>
                        <Link to="/Translator_lists_page">
                            <div className="flex justify-center">
                                <button className=' text-[1.3rem] sm:text-[1.7rem] lg:text-[2rem] font-bold py-3 px-8 sm:px-12 lg:px-14 border-2 border-black rounded-3xl'>Start translate</button>
                            </div>
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                        <img src={Logo} alt="" className='w-[45rem]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
