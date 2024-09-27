import React, {FC} from 'react'
import { useInput } from '../../hooks/useInput.ts';

interface Props {
    inputType: 'email' | 'password';
    labelText: string;
}

export const Input: FC<Props> = ({inputType, labelText}) => {
    const {id, inputValue, onInputChange} = useInput (inputType)

return (
    <div className="flex gap-[2px] flex-col mt-[20px]">
        <label htmlFor = {id} className='font-bold font-serif leading-[20px] text-[18px] md:text-[14px]'>{labelText}</label>
        <input onChange={onInputChange} value={inputValue} className='w-full rounded-[5px] py-[14px] px-[20px] h-[50px] font-sans font-normal leading-[22px] text-[18px] md:text-[14px] text-dark-blue bg-[#E0E0E0] border-none focus:outline-1 focus:outline-gold' id={id} type={inputType} placeholder={`${inputType.substring(0,1).toUpperCase()}${inputType.substring(1,inputType.length)}`}/>
    </div>
)
}