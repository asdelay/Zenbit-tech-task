import axios from 'axios';
import {useState, useEffect} from 'react';

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

export const useDeals = () => {
    const [deals, setDeals] = useState<Deal[]>([])

    useEffect( () => {
        const getData = async () => {
            const data = await axios.get('http://127.0.0.1:7001/deals')
            const dealsArray: Deal[] = data.data
            setDeals(dealsArray)
        }
        getData()

    }, [])

    return deals
}