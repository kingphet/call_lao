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
                        <div className="">
                            <p className='text-[#0F2484] text-[8rem] font-bold'>CallLao</p>
                            <p className='text-[#C3A356] text-[8rem] font-bold'>Translator</p>
                        </div>
                        <Link to="/Translator_lists_page">
                            <div className="">
                                <button className='text-[2rem] font-bold py-3 px-14 border-2 border-black rounded-3xl'>Start translate</button>
                            </div>
                        </Link>
                    </div>
                    <div className="">
                        <img src={Logo} alt="" className='w-[45rem]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
