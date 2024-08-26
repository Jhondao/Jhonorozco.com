import { itemsNavbar } from '@/data'
import { Link } from 'lucide-react'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='fixed z-20 flex flex-col items-center w-full mt-auto justify-center h-max bottom-20'>  
        <div className='flex items-center gap-2 justify-center px-4 py-1 dark:bg-white/10 bg-slate-800/10 backdrop-blur-sm rounded-full '>
            {itemsNavbar.map((item) => (
                <div key={item.id} className='courser-pointer hover:dark-bg-slate-800 hover:bg-slate-400 px-3 py-2 rounded-full transition duration-150'>
                    <a href={item.link}> {item.icon} </a>
                </div>
            ))}
        </div>
    </nav>
)
}
