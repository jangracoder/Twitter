import React from 'react'
import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { RiNotification2Line } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
function Leftside() {
  return (
    <div className='w-[20%] border-r '>
        <div className='mr-5'>
            <div className='mt-2  p-3  w-fit hover:bg-gray-200 rounded-full' >
                <img src={logo} alt="twitter logo" className='h-7  ' />
            </div>
            <div className='mt-4'>
                <Link to={'/'} className='w-fit px-3 py-1 flex items-center   hover:bg-gray-200 rounded-full'>
                <GoHome className='w-8 h-10 mr-4' />
                <p className='text-2xl font-medium '>Home</p>
                </Link>
                <div className='w-fit px-3 py-1 flex items-center  hover:bg-gray-200 rounded-full'>
                <MdOutlineExplore className='w-8 h-10 mr-4' />
                <p className='text-2xl font-medium '>Explore</p>
                </div>
                <div className='w-fit px-3 py-1 flex items-center  hover:bg-gray-200 rounded-full'>
                <RiNotification2Line className='w-7 h-10 mr-5' />
                <p className='text-2xl font-medium '>Notifications</p>
                </div>
                <Link to={'/profile'} className='w-fit px-3 py-1 flex items-center  hover:bg-gray-200 rounded-full'>
                <IoPersonOutline className='w-7 h-10 mr-5' />
                <p className='text-2xl font-medium '>Profile</p>
                </Link>
                <div className='w-fit px-3 py-1 flex items-center  hover:bg-gray-200 rounded-full'>
                <FaRegBookmark className='w-5 h-10 mr-6 ml-1' />
                <p className='text-2xl font-medium '>Bookmarks</p>
                </div>
                <div className='w-fit px-3 py-1 flex items-center  hover:bg-gray-200 rounded-full'>
                <IoLogOutOutline className='w-8 h-10 mr-4' />
                <p className='text-2xl font-medium '>Logout</p>
                </div>
               
            </div>
            <button className='text-xl mt-5 text-white bg-sky-500 w-full rounded-full py-2 ' >Post</button>
        </div>
    </div>
  )
}

export default Leftside