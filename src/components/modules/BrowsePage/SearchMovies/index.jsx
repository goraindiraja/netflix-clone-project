import React, { useEffect, useState } from 'react'
import EachUtils from '@/utils/EachUtils'
import MovieCard from '@mods/BrowsePage/MovieCard'

import { idMovieAtom, searchMoviesAtom } from '@/jotai/atoms'
import { useAtom } from 'jotai'
import { searchMovies } from '@/utils/searchMovies'

const SearchMovies = () => {
    const [isHover, setIsHover] = useState(false)
    const [, setIdMovie] = useAtom(idMovieAtom)
    const [movieList, setMovieList] = useState([])
    const [searchQuery] = useAtom(searchMoviesAtom)

    const handleMouseEnter = (id) => {
        setIsHover(true)
        setIdMovie(id)
    }

    useEffect(() => {
        if(searchQuery){
            searchMovies({query: searchQuery}).then(result => setMovieList(result))
        }
    }, [searchQuery])
    return (
        <div className='grid grid-cols-4 p-8 gap-4 mt-10'>
            <EachUtils
                of={movieList}
                render={(item, index) => (
                    <div
                        className='h-72 mt-4'
                        key={index}

                        onMouseLeave={() => {
                            setIsHover(false)
                            setIdMovie(null)
                        }}
                    >
                        <MovieCard
                            data={item}
                            isHover={isHover}
                            setIsHover={setIdMovie}
                            onMouseEnter={() => handleMouseEnter(item.id)}
                        />
                    </div>
                )}
            />
        </div>
    )
}

export default SearchMovies