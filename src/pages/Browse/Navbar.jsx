import React from 'react'
import EachUtils from '@/utils/EachUtils'
import AccountMenu from '@mods/BrowsePage/AccountMenu'
import InputSearchMovies from '@mods/BrowsePage/InputSearchMovies'

import { LIST_NAVBAR } from '@/constants/listNavbar'

const Navbar = () => {
    return (
        <header className='relative'>
            <nav className='bg-[#141414] fixed text-white top-0 left-0 px-8 w-full z-10'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        {/* Sebelah Kiri Nav */}
                        <img 
                            src='/public/netflix-logo-icon.png' alt=""
                            className='w-[120px] -ml-2'
                        />

                        <ul className='sm:flex hidden items-center gap-4'>
                            <EachUtils
                                of={LIST_NAVBAR}
                                render={(item, index) => (
                                    <li key={index}>
                                        <a href={item.url}>{item.title}</a>
                                    </li>
                                )}
                            />
                        </ul>
                    </div>

                    <div className='flex items-center gap-2'>
                        {/* Sebelah Kanan Nav */}
                        <InputSearchMovies/>
                        <AccountMenu/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar