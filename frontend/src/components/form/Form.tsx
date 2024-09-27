import React, {FC} from 'react'
import { Input } from './Input.tsx'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm.ts'



interface FormProps {
    formType: 'login' | 'registration'
}

export const Form: FC<FormProps>= ({formType}) => {
    const formTypeText = formType.substring(0,1).toUpperCase()+formType.substring(1,formType.length)

    const onClickHandler = useForm<string>(formType)
    
return (
    <div className="text-[black] flex flex-col gap-[5px] min-w-[350px] ">
        <div><h2 className='font-bold font-serif text-[32px] md-:text-[28px] text-dark-blue leading-[34px]'>{formTypeText}</h2></div>

        <Input inputType="email" labelText='Email'/>
        <Input inputType="password" labelText='Password'/>

        {formType === 'login' && <div className='text-right font-sans text-[14px] leading-[22px] font-semibold text-gold'><Link to="/forgot-the-password">Forgot password?</Link></div>}

        <button onClick={onClickHandler} className='mt-[30px] bg-gold w-full h-[52px] md:h-[44px] rounded-[5px] font-serif text-[#FFFF] font-bold text-[20px] md:text-[16px] leading-[22px] py-[11px] '>
            <p>{formType === 'login' ? 'Sign In' : 'Sign Up'}</p>
        </button>

        {formType === 'login' && <div className='mt-[5px] flex justify-center items-center font-sans font-semibold text-[18px] md:text-[14px] leading-[22px]'>Don't have account? <Link to="/register"><p className='text-gold ml-[5px]'> Sign Up</p></Link></div>}

    </div>
)
}