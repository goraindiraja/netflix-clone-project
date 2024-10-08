import React from 'react'

import { useAtom } from 'jotai'
import { MdClose } from 'react-icons/md'
import { GoPlay, GoPlusCircle } from 'react-icons/go'
import { isOpenModalAtom } from '@/jotai/atoms'
import { DETAIL_VIDEO } from '@/constants/dummyVideo'
import Recommendation from '@mods/BrowsePage/Modal/Recommendation'

const Modal = () => {
    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)

    return (
        <dialog className={`modal ${isOpenModal ? "modal-open" : null}`}>
            <div className='modal-box max-w-screen-md p-0'>
                <div className='relative'>
                    <img src={DETAIL_VIDEO.image} alt="" className='w-full cursor-pointer'/>
                    <button 
                        className='absolute top-2 right-2 rounded-full p-1 border'
                        onClick={()=>setIsOpenModal(false)}
                    >
                        <MdClose size={24}/>
                    </button>

                    <div className='absolute bottom-20 left-10'>
                        <h2 className='text-2xl font-bold text-white'>{DETAIL_VIDEO.title}</h2>
                    </div>
                    <div className='absolute bottom-8 left-10'>
                        <div className='flex gap-2'>
                            <button className='hover:text-slate-50'>
                                <GoPlay size={32}/>
                            </button>
                            <button className='hover:text-slate-50'>
                                <GoPlusCircle size={32}/> 
                            </button>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-1 px-4 py-2 text-white items-center'>
                    <div>
                        <div className='flex gap-2'>
                            <p>{DETAIL_VIDEO.release_date}</p>
                            <p>{DETAIL_VIDEO.runtime}</p>
                        </div>
                        <p>{DETAIL_VIDEO.overview}</p>
                    </div>
                    <div>
                        <p>{DETAIL_VIDEO.genre}</p>
                        <p>{DETAIL_VIDEO.popularity}</p>
                    </div>
                </div>

                <Recommendation/>
            </div>
        </dialog>
    )
}

export default Modal