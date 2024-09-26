import React, { useEffect, useState } from 'react'
import { DealCard } from './DealCard.tsx'
import axios from 'axios'

interface Deal {
    id: number;
    title: string;
    imageUrl: string;
    price: string;
    tiket: string;
    yieldPercent: string;
    daysLeft: string;
    sold: string;
}

export const OpenDeals = () => {

    const [deals, setDeals] = useState<Deal[]>([])

    useEffect( () => {
        const getData = async () => {
            const data = await axios.get('http://localhost:7001/deals')
            const dealsArray: Deal[] = data.data
            console.log(dealsArray)
            setDeals(dealsArray)
        }
        getData()

    }, [])
    
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