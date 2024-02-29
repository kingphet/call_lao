import React from 'react'
import { IoIosSearch } from "react-icons/io";

function Search() {
  return (
    <>
      <div className="flex justify-center items-center pt-5 pb-20">
        <div className="w-[40%] h-14 border-2 border-[#0000001b] rounded-3xl flex items-center">
          <div className="flex items-center gap-4 px-4 py-3 w-full">
            <div className="bg-[#0F2484] p-2 rounded-full">
              <p className='text-white text-[1.5rem]'><IoIosSearch /></p>
            </div>
            <div className="w-full">
              <input type="text" placeholder='Search...' className='w-full outline-none' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
