import React, { useEffect, useState } from 'react'
import EachUtils from '@/utils/EachUtils'

import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { GoPlay } from 'react-icons/go'
import { idMovieAtom, isOpenModalAtom } from '@/jotai/atoms'
import { getMoviesRecommendation } from '@/utils/getMoviesRecommendation'
import { getVideoURL } from '@/utils/getVideoURL'

const Recommendation = () => {
    const navigate = useNavigate()
    const [idMovie, setIdMovie] = useAtom(idMovieAtom)
    const [,setIsOpenModal] = useAtom(isOpenModalAtom)
    const [moviesRecommendation, setMoviesRecommendation] = useState([])
    const [videoURL, setVideoURL] = useState(null)

    useEffect(()=> {
        if(idMovie){
            getMoviesRecommendation({movie_id: idMovie}).then((result) => setMoviesRecommendation(result))
        }

    }, [idMovie])
    return (
        <div className='px-2 py-4 mt-4'>
            <h2 className='text-2xl text-white font-bold'>Movies Recommendation</h2>

            <div className='grid grid-cols-3 gap-2 mt-4'>
                <EachUtils
                    of={moviesRecommendation}
                    render={(item, index)=>(
                        <div 
                            key={index} 
                            className='w-full h-auto cursor-pointer rounded-md bg-[#141414]'
                            onMouseEnter={() => getVideoURL({movie_id: item.id}).then((result)=> setVideoURL(result))}
                        >
                            <div className='relative'>
                                <img 
                                    src={import.meta.env.VITE_BASE_URL_TMDB_IMAGE + item.poster_path} 
                                    alt="" 
                                    className='w-full h-48 rounded-t-md'
                                />

                                <button 
                                    className='absolute top-10 left-1/2 -translate-x-1/2'
                                    onClick={()=> {
                                        navigate('/watch/' + videoURL)
                                        setIsOpenModal(false)
                                        setIdMovie(null)
                                    }}
                                >
                                    <GoPlay size={44}/>
                                </button>
                            </div>

                            <div className='p-2'>
                                <div className='flex gap-2'>
                                    <p>{item.release_date}</p>
                                    <p className='text-green-400/90'>{item.vote_average}</p>
                                </div>

                                <p className='text-wrap pt-2 max-h-32 overflow-y-scroll'>{item.overview}</p>
                            </div>
                        </div>
                    )}
                />
            </div>
        </div>
    )
}

export default Recommendation