import React, { useEffect, useState } from 'react'
import CarouselLayout from '@layouts/CarouselLayout'
import EachUtils from '@/utils/EachUtils'
import MovieCard from '@mods/BrowsePage/MovieCard'

import { useAtom } from 'jotai'
import { idMovieAtom } from '@/jotai/atoms'
import { getMoviesByType } from '@/utils/getMoviesByType'

const MovieList = ({title, moviesType}) => {
    const [isHover, setIsHover] = useState(false)
    const [, setIdMovie] = useAtom(idMovieAtom)
    const [movieList, setMovieList] = useState([])

    const handleMouseEnter = (id) => {
        setIsHover(true)
        setIdMovie(id)
    }

    useEffect(() => {
        getMoviesByType({moviesType}).then((result) => setMovieList(result))
    }, [])

    return (
        <section className='px-8 py-8'>
            <h3 className='text-3xl text-white font-semibold mb-2'>{title}</h3>
            <CarouselLayout>
                <EachUtils
                    of={movieList}
                    render={(item, index) => (
                        <div
                            className='carousel-item h-72 w-1/4 mt-4'
                            key={index}

                            onMouseLeave={()=>{
                                setIsHover(false)
                                setIdMovie(null)
                            }}
                        >
                            <MovieCard 
                                data={item} 
                                isHover={isHover} 
                                setIsHover={setIdMovie} 
                                onMouseEnter ={()=>handleMouseEnter(item.id)}
                            />
                        </div>
                    )}
                />
            </CarouselLayout>
        </section>
    )
}

export default MovieList