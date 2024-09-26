import React, {FC} from 'react'
import { DealDetail } from './DealDetail.tsx';

interface Props {
    id: number;
    title: string;
    imageUrl: string;
    price: string;
    tiket: string;
    yieldPercent: string;
    daysLeft: string;
    sold: string;
}

export const DealCard: FC<Props> = ({id, title, imageUrl, price, tiket, yieldPercent, daysLeft, sold}) => {
return (
    <div className='shrink-0 w-[100%] sm:w-[48.4%] lg:w-[48.8%] 2xl:w-[630px] h-[260px] lg:h-[320px] 2xl:h-[400px] bg-no-repeat bg-cover bg-center rounded-[5px] flex items-end p-[8px] lg:p-[14px]' style={{backgroundImage: `url(${imageUrl})`}}>
        <div>
            <div>
                <h3 className='text-left font-bold text-[24px] sm:text-[20px] leading-[34px]'>{title}</h3>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 gap-x-[14px] lg:gap-x-[80px] 2xl:gap-x-[100px]'>
                <DealDetail>{`${price} Dhs`}</DealDetail>
                <DealDetail>{`Yield ${yieldPercent}%`}</DealDetail>
                <DealDetail>{`Sold ${sold}%`}</DealDetail>
                <DealDetail>{`Tiket - ${tiket} Dhs`}</DealDetail>
                <DealDetail>{`Days left ${daysLeft}`}</DealDetail>
            </div>
        </div>
    </div>
)
}