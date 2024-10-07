import DefaultButton from '@mods/LandingPage/DefaultButton'
import OptionLanguage from '@mods/LandingPage/OptionLanguage'

import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <header className='relative z-20'>
            <nav className='flex flex-wrap justify-between items-center pr-10 pl-7 py-4'>
                <div>
                    <img src="/netflix-logo-icon.png" alt="icon-Netflix" 
                    width={105}
                    height={45}
                    />
                </div>

                <div className='flex flex-wrap items-center gap-4'>
                    <OptionLanguage/>

                    <DefaultButton text={"Sign In"} onClick={() => navigate("/login")}/>
                </div>
            </nav>
        </header>
    )
}

export default Navbar