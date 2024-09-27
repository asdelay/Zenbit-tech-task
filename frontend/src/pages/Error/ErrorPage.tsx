import React, {FC} from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorPage: FC = () => {
    const navigate = useNavigate()
return (
    <div className='h-[100vh] flex flex-col justify-center  items-center bg-dark-blue '>
        <div className=' w-[320px] sm:w-[600px] md:w-[700px] h-[400px] border border-gold rounded-2xl flex flex-col gap-[20px] items-center justify-center'>
            <div className='text-center'>
                <p className=' text-[36px] sm:text-[42px] md:text-[48px] '>Whoops wrong addres :(</p>
            </div>
            
            <button onClick={() => navigate(-1)}>
                <div className='text-[white] w-[200px] h-[70px] border-[1px] border-gold transition hover:bg-gold hover:text-dark-blue rounded-xl flex justify-center items-center' >
                    Go back
                </div>
            </button>
        </div>
        
    </div>
)
}