import React, {FC} from 'react'
import { LoginInput } from './LoginInput.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../redux/hooks.ts'
import { logIn } from '../redux/features/users/userSlice.ts'
import axios from 'axios'
import dotenv from 'dotenv'

export const LoginForm: FC= () => {
    const email = useAppSelector(state => state.users.loginInputData.loginEmail)
    const password = useAppSelector(state => state.users.loginInputData.loginPassword)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onClickHandler = async (e) => {
        e.preventDefault();
        try{
            const result = (await (axios.post(`http://127.0.0.1:7001/auth/login`,{email, password}))).data
            result.token && dispatch(logIn())
            navigate('/')
        } catch (e) {
            alert(`Error! ${typeof e.response.data === 'string' ? e.response.data : ''}`)
        }

    }
    
return (
    <div className="text-[black] flex flex-col gap-[5px] min-w-[350px] ">
        <div><h2 className='font-bold font-serif text-[32px] md-:text-[28px] text-dark-blue leading-[34px]'>Login</h2></div>
        <LoginInput inputType="email" labelText='Email'/>
        <LoginInput inputType="password" labelText='Password'/>
        <div className='text-right font-sans text-[14px] leading-[22px] font-semibold text-gold'><Link to="/forgot-the-password">Forgot password?</Link></div>

        <Link onClick={onClickHandler} to='/'>
            <div>
                <button className='mt-[30px] bg-gold w-full h-[52px] md:h-[44px] rounded-[5px] font-serif text-[#FFFF] font-bold text-[20px] md:text-[16px] leading-[22px] py-[11px] '>
                    <p>Sign In</p>
                </button>
            </div>
        </Link>

        <div className='mt-[5px] flex justify-center items-center font-sans font-semibold text-[18px] md:text-[14px] leading-[22px]'>Don't have account? <Link to="/register"><p className='text-gold ml-[5px]'> Sign Up</p></Link></div>

    </div>
)
}