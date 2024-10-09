import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

import { GoPlay, GoMute, GoUnmute } from 'react-icons/go'
import { JUMBOTRON_VIDEO } from '@/constants/dummyVideo'
import { getMoviesByType } from '@/utils/getMoviesByType'
import { idMovieAtom, isOpenModalAtom } from '@/jotai/atoms'
import { useAtom } from 'jotai'
import { getVideoURL } from '@/utils/getVideoURL'
import { useNavigate } from 'react-router-dom'

const Jumbotron = () => {
    const navigate = useNavigate()
    const [isMute, setIsMute] = useState(true)
    const [topMovies, setTopMovies] = useState([])
    const [videoURL, setVideoURL] = useState(null)
    const [idMovie, setIdMovie] = useAtom(idMovieAtom)
    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)

    useEffect(() => {
        getMoviesByType({moviesType: "top_rated"}).then(result => {
            setTopMovies(result[0])
            setIdMovie(result[0].id)
        }).finally(() => getVideoURL({movie_id: idMovie}).then(result => setVideoURL(result)))
    }, [idMovie])

    return (
        <div className='relative h-[60vw] w-full'>
            <ReactPlayer
                url={`https://youtube.com/watch?v=${videoURL}`}
                width={"100%"}
                height={"100%"}
                playing={true}
                muted={isMute}
                controls={false}
            />

            <div className='absolute top-1/2 -translate-y-1/2 left-0 p-8 max-w-md'>
                <div className='flex flex-col gap-4 text-white'>
                    <h1 className='text-5xl font-black'>{topMovies.title}</h1>
                    <p>{topMovies.overview}</p>
                </div>
                <div className='flex gap-4 mt-4'>
                    <button 
                        className="bg-gray-200 py-2 px-8 rounded-md font-bold text-xl text-black flex items-center gap-2"
                        onClick={()=> {
                            navigate('/watch/' + videoURL)
                            setIsMute(true)
                        }}
                    >
                        <GoPlay/> Play
                    </button>
                    <button
                        className="bg-stone-600/80 py-2 px-8 rounded-md text-white"
                        onClick={()=> setIsOpenModal(true)}
                    >
                        More Detail
                    </button>
                </div>
            </div>

            <div className='absolute right-6 bottom-1/2 -translate-y-1/2 text-white'>
                <div 
                    className='border p-2 rounded-full cursor-pointer'
                    onClick={()=> setIsMute(!isMute)}
                >
                    {isMute ? <GoMute size={24}/> : <GoUnmute size={24}/>}
                </div>
            </div>
        </div>
    )
}

export default Jumbotron