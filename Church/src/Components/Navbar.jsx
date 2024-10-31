import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const[toggle, setToggle] = useState(false)
  return (
    <header className='flex justify-center bg-orange-400 py-7 relative'>
        <div className='w-[90%] flex justify-between items-center'>
            <div>
                <h1 className='font-bold text-4xl'>Deeds</h1>
            </div>
            <nav>
                <ul className={`flex md:flex-row flex-col gap-8 text-[18px] font-medium absolute bg-Tertiary md:bg-transparent left-0 md:top-9 top-24 w-full md:justify-end md:w-[95%] md:text-Tertiary text-Primary px-10 md:px-0 md:py-0 py-5 ${toggle ? "top-20" : "top-[-490px]"}`}>
                    <li className='hover:bg-orange-400 md:hover:bg-transparent md:p-0 p-1 rounded-sm'><NavLink to="/">Home</NavLink></li>
                    <NavLink to="/About"><li className='hover:bg-orange-400 md:hover:bg-transparent md:p-0 p-1 rounded-sm'>About</li></NavLink>
                    <li><NavLink to="/Event">Event</NavLink></li>
                    <li><NavLink to="/Mission">Mission</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </nav>
            <p className='md:hidden flex' onClick={()=>setToggle(!toggle)}>{toggle?<i className="fa-solid fa-x text-2xl"></i>:<i className="fa-solid fa-bars text-2xl"></i>}</p>
        </div>
    </header>
  )
}
