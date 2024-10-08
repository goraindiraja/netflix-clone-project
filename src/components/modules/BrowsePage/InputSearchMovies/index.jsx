import React, { useState } from 'react'

import { GoSearch } from "react-icons/go"
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import { searchMoviesAtom } from '@/jotai/atoms'

const InputSearchMovies = () => {
    const [isShow, setIsShow] = useState(false)
    const [,setSearchMovies] = useAtom(searchMoviesAtom)

    const handleChange = (e) => {
        e.preventDefault()

        if(e.target.value.length > 3){
            setSearchMovies(e.target.value)
        } else {
            setSearchMovies(null)
        }
    }
    return (
        <div className='relative'>
            <motion.input
                initial={{translateX: -20}}
                animate={{ translateX: isShow ? 0 : -20 }}
                className='bg-black border py-2 pl-10'
                style={{display: isShow ? 'block' : 'none'}}
                placeholder='title, people, genres...'
                onChange={handleChange}
            />

            <GoSearch 
                className={isShow ?'absolute top-1/2 left-3 -translate-y-1/2 z-10 cursor-pointer' : 'cursor-pointer'} size={20}
                onClick={() => setIsShow(!isShow)}
            />
        </div>
    )
}

export default InputSearchMovies