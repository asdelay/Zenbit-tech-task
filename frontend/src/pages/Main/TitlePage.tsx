import React, {FC, lazy} from 'react'
import background from '../../assets/images/land-bg.png'

export const TitlePage: FC = () => {
    const scrollToDeals = () => {
        const target = document.getElementById('OpenDealsSection')        
        target?.scrollIntoView({behavior: 'smooth'})
    }
return (
    <div className='bg-dark-blue'>
        <div className=' h-[700px] sm:h-[900px] lg:h-[1024px] flex justify-center items-center'>
            <img src={background} loading='lazy' alt="background" className='absolute w-full h-[700px] sm:h-[900px] lg:h-[1024px] bg-no-repeat object-cover bg-center opacity-[60%]'/>
            <div className='z-10 w-[1085px] flex flex-col gap-y-[60px] sm:gap-[30px] justify-center items-center text-center'>
                <div className='flex flex-col items-center gap-2'>
                    <h1 className=' px-1 text-[40px] sm:text-[48px] lg:text-[64px] leading-60px] sm:leading-[80px] font-bold'>The chemical negatively charged</h1>
                    <div className=' w-[300px] sm:w-[600px] lg:w-[822px]'>
                        <p className=' text-[16px] sm:text-[18px] lg:text-[24px] leading-[20px] sm:leading-[28px] lg:leading-[32px] font-sans font-normal'>Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is </p>
                    </div>
                    
                </div>                
                <button onClick={scrollToDeals} className='w-[160px] h-[54px] text-[20px] leading-[34px] rounded-[8px] border border-white font-bold'>Get Started</button>
            </div>            
        </div>
    </div>
    
)
}