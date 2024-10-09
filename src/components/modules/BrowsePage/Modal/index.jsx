import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Recommendation from '@mods/BrowsePage/Modal/Recommendation'

import { useAtom } from 'jotai'
import { MdClose } from 'react-icons/md'
import { GoPlay, GoPlusCircle } from 'react-icons/go'
import { idMovieAtom, isOpenModalAtom } from '@/jotai/atoms'
import { getMovieDetail } from '@/utils/getMovieDetail'
import { getVideoURL } from '@/utils/getVideoURL'

const Modal = () => {
    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)
    const [idMovie] = useAtom(idMovieAtom)
    const [movieDetail, setMovieDetail] = useState([])
    const [videoURL, setVideoURL] = useState(null)

    useEffect(()=> {
        if(idMovie && isOpenModal) {
            getMovieDetail({movie_id: idMovie}).then((result)=> setMovieDetail(result))

            getVideoURL({ movie_id: idMovie }).then((result) => setVideoURL(result))
        }
    }, [idMovie, isOpenModal])

    const genreMapping = (genres) => {
        let result = ""
        genres?.map((genre, index) => {
            if(index === genres.length - 1){
                result += genre.name
            } else {
                result += genre.name + ", "
            }
        })

        return result
    }
    
    return (
        <dialog className={`modal ${isOpenModal ? "modal-open" : null}`}>
            <div className='modal-box max-w-screen-md p-0'>
                <div className='relative'>
                    <div className='h-[400px] w-full'>
                        <ReactPlayer
                            width={"100%"}
                            height={"100%"}
                            playing={false}
                            muted={false}
                            loop={false}
                            url={`https://youtube.com/watch?v=${videoURL}`}
                        />
                    </div>
                    <button 
                        className='absolute top-2 right-2 rounded-full p-1 border'
                        onClick={()=>setIsOpenModal(false)}
                    >
                        <MdClose size={24}/>
                    </button>

                    <div className='absolute bottom-1/2 left-10'>
                        <h2 className='text-2xl font-bold text-white'>{movieDetail?.title}</h2>
                    </div>
                    <div className='absolute bottom-1/2 translate-y-14 left-10'>
                        <div className='flex gap-2'>
                            <button className='hover:text-slate-50 bg-slate-50 w-32 text-black font-bold text-xl flex items-center justify-center gap-4 p-1.5 rounded-md'>
                                <GoPlay size={32}/>
                                Play
                            </button>
                            <button className='text-slate-200 hover:text-white'>
                                <GoPlusCircle size={44}/> 
                            </button>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-8 px-4 py-2 text-white'>
                    <div>
                        <div className='flex gap-2'>
                            <p>{movieDetail?.release_date}</p>
                            <p className='text-green-400/90'>{movieDetail?.runtime}</p>
                        </div>
                        <p className='mt-4 text-justify'>{movieDetail?.overview}</p>
                    </div>
                    <div className='flex flex-col gap-4'>

                        <p>{genreMapping(movieDetail?.genres)}</p>
                        <p>{movieDetail?.popularity}</p>
                    </div>
                </div>

                <Recommendation/>
            </div>
        </dialog>
    )
}

export default Modal