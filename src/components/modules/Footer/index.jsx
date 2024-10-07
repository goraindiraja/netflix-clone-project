import React from 'react'
import EachUtils from '@/utils/EachUtils'
import OptionLanguage from '@mods/OptionLanguage'

import { useAtom } from 'jotai'
import { languageAtom } from '@/jotai/atoms'
import { LIST_FOOTER_EN, LIST_FOOTER_ID } from '@/constants/listFooter'

const Footer = () => {
    const [language] = useAtom(languageAtom)
    return (
        <footer className='w-full text-white bg-black border-t-8 border-stone-900 p-8'>
            <div>
                Question? Call <a href="">6281234567890</a>
            </div>

            <ul className='grid sm:grid-cols-4 gap-4 py-8'>
                <EachUtils
                    of={language == "en" ? LIST_FOOTER_EN : LIST_FOOTER_ID}
                    render={(item, index) => (
                        <li>
                            <a 
                                href={item.url} 
                                className="underline"
                            >
                                {item.title}
                            </a>
                        </li>
                    )}
                />
            </ul>

            <OptionLanguage/>
            <p className='mt-6'>Netflix Indonesia</p>
        </footer>
    )
}

export default Footer