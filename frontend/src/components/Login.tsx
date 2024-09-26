import React, {FC} from 'react'
import { Header } from './Header.tsx'
import loginImage from '../images/login-bg.png'
import { LoginForm } from './LoginForm.tsx'

export const Login: FC = () => {
return (
    <div className='h-[110vh]  flex flex-col'>
        <Header />
        <div className=' sm:h-[100%] flex flex-row' >
            <div className=' hidden sm:flex shrink flex-1 bg-no-repeat bg-cover bg-center' style={{backgroundImage:`url(${loginImage})`}}></div>
            <div className='flex w-[450px] mb-10 sm:mb-0 lg:w-[550px] items-start mt-8 sm:mt-0 sm:items-center justify-center :p-4'>
                <LoginForm />
            </div>
        </div>
        <div className='sm:hidden flex-1 bg-no-repeat bg-cover bg-center' style={{backgroundImage:`url(${loginImage})`}}>
        </div>
        
    </div>
)
}