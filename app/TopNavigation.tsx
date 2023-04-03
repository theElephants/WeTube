"use client"

import { BsYoutube, BsMicFill } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';
import { BiSearch, BiUser } from 'react-icons/bi';
import { TbVideoPlus } from 'react-icons/tb';
import { RxBell } from 'react-icons/rx';
import { useState } from 'react';


const TopNavigation = () => {
    const [search, setSearch] = useState("");
    return (
        <div className='flex justify-between items-center px-4 pb-4 pt-2'>
            <div className="flex items-center gap-6"> <HiMenu size={40} className='rounded-full p-2 hover:bg-zinc-700' />
                <div className='flex items-center gap-1  cursor-pointer'>
                    <BsYoutube size={30} className='text-red-500' />
                    <div className='text-xl'>WeTube</div>
                </div>
            </div>
            <div className='flex gap-0 items-center'>
                <div className="hidden md:flex min-w-[300px] lg:w-[620px]">
                <input
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                    placeholder='Search'
                    className='w-full px-4 py-2 text-zinc-200 bg-zinc-900 border-[1px] border-zinc-700 focus:bg-black rounded-tl-full rounded-bl-full focus:outline-none focus:ring-[1px] focus:ring-sky-500 placeholder:text-zinc-400' />
                </div>
                <div className='md:bg-zinc-700 items-center p-3 rounded-tr-full rounded-br-full px-5 py-3 sm:bg-transparent cursor-pointer'> <BiSearch size={20} /></div>
                <div className='bg-stone-800 md:rounded-full p-3 ml-1 hover:bg-stone-700 cursor-pointer'> <BsMicFill size={18} /></div>
            </div>
            
            <div className='items-center'>
                <div className="flex justify-between gap-5 items-center">
                    <div className='cursor-pointer rounded-full p-2 hover:bg-zinc-800'><TbVideoPlus size={25} /></div>
                    <div className='cursor-pointer rounded-full p-2 hover:bg-zinc-800'><RxBell size={22} /></div>
                    <div className='cursor-pointer rounded-full'><BiUser size={24} /></div>
                </div>
            </div>
        </div>

    )
}

export default TopNavigation;