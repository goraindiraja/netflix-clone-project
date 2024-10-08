import { LIST_VIDEOS } from '@/constants/dummyVideo'
import EachUtils from '@/utils/EachUtils'
import React, { useState } from 'react'
import MovieCard from '@mods/BrowsePage/MovieCard'
import CarouselLayout from '@/components/Layouts/CarouselLayout'

const MovieList = ({title}) => {
    const [isHover, setIsHover] = useState(false)
    const [idMovie, setIdMovie] = useState(null)

    const handleMouseEnter = (id) => {
        setIsHover(true)
        setIdMovie(id)
    }

    return (
        <section className='px-8 py-8'>
            <h3 className='text-3xl text-white font-semibold mb-2'>{title}</h3>
            <CarouselLayout>
                <EachUtils
                    of={LIST_VIDEOS}
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
                                idMovie={idMovie} 
                                setIsHover={setIdMovie} 
                                setIdMovie={setIdMovie}
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