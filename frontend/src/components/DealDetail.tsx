import React, {FC} from 'react'

interface Props {
    children: string
}

export const DealDetail: FC<Props> = ({children}) => {
return (
    <div className='w-[102px] lg:w-[160px]'><p className='text-left font-sans text-[12px] lg:text-[18px] font-bold leading-[22px]'>{children}</p></div>
)
}