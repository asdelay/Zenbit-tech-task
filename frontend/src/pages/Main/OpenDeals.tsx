import React from 'react'
import { DealCard } from './DealCard.tsx'
import { useDeals } from '../../hooks/useDeals.ts'

export const OpenDeals = () => {
    const deals = useDeals()
    
    return (
        <div className=' px-[12px] sm:px-[24px] lg:px-[60px] 2xl:px-[80px] mt-[30px]' id='OpenDealsSection'>
            <div className='text-left '>
                <h2 className='text-gold font-bold text-[28px] leading-[34px]'>Open Deals</h2>
            </div>
            
            <div className='flex flex-wrap justify-center gap-y-[10px] sm:gap-[10px] lg:gap-[20px] mt-[10px] mb-[5px]'>
                {
                    deals.map(deal => (
                        <DealCard key={deal.id} id={deal.id} title={deal.title} imageUrl={deal.imageUrl} price={deal.price} tiket={deal.tiket} yieldPercent={deal.yieldPercent} daysLeft={deal.daysLeft} sold={deal.sold} />
                    ))
                }
            </div>
        </div>
    )
}