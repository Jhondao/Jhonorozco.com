"use client"

import { itemsNavbarAboutMe } from '@/data'
import Link from 'next/link'
import React from 'react'
import { ToggleTheme } from '../toggle-theme'
import { CommandPaletteTrigger } from '../command-palette-trigger'
import { useActiveNavId } from '../use-active-nav-id'

export default function NavbarAboutMe() {
    const activeId = useActiveNavId(itemsNavbarAboutMe)

    return (
        <nav className='fixed z-20 flex flex-col items-center w-full mt-auto justify-center h-max bottom-20'>
            <div className='flex items-center gap-0.5 sm:gap-2 md:gap-3 justify-center px-2 sm:px-4 md:px-5 py-1 md:py-2 dark:bg-white/10 bg-slate-800/10 backdrop-blur-sm rounded-full '>
                {itemsNavbarAboutMe.map((item) => (
                    <div
                        key={item.id}
                        className={`relative group cursor-pointer px-1.5 sm:px-3 md:px-4 py-2 md:py-2.5 rounded-full transition duration-150 ${
                            activeId === item.id
                                ? 'bg-gradient-to-br from-blue-500 to-cyan-600 text-white'
                                : 'hover:bg-slate-400 dark:hover:bg-slate-800'
                        }`}
                    >
                        <Link href={item.link} aria-label={item.title}>
                            {item.icon}
                        </Link>
                        <span className='pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 dark:bg-white px-2 py-1 text-xs font-medium text-white dark:text-slate-900 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100'>
                            {item.title}
                        </span>
                    </div>
                ))}
                <CommandPaletteTrigger />
                <ToggleTheme />
            </div>
        </nav>
    )
}
