import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
    return (
        <div className='fixed w-full flex justify-end items-center z-10  p-20'>
            <button className='bg-black border-4 px-8 py-3 rounded-full text-xl hover:bg-gray-500'>Hire me</button>

            <i className='ri-more-2-fill text-4xl ml-3 '></i>
        </div>
    )
}

export default Header