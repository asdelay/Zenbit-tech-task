import React, {FC} from 'react'
import { Header } from '../../components/ui/Header.tsx'
import regImage from '../../assets/images/city-bg.jpg'
import { Form } from '../../components/form/Form.tsx'

export const Register: FC = () => {
return (
    <div className='h-[110vh]  flex flex-col'>
        <Header />
        <div className=' sm:h-[100%] flex flex-row' >
            <div className=' hidden sm:flex shrink flex-1 bg-no-repeat bg-cover bg-center' style={{backgroundImage:`url(${regImage})`}}></div>
            <div className='flex w-[450px] mb-10 sm:mb-0 lg:w-[550px] items-start mt-8 sm:mt-0 sm:items-center justify-center :p-4'>
                <Form formType='registration'/>
            </div>
        </div>
        <div className='sm:hidden flex-1 bg-no-repeat bg-cover bg-center' style={{backgroundImage:`url(${regImage})`}}>
        </div>
        
    </div>
)
}