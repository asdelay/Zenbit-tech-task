import { Deal } from './deals.model';
export declare class DealsService {
    private dealRepository;
    constructor(dealRepository: typeof Deal);
    getOneDeal(id: number): Promise<0 | Deal>;
    getAllDeals(): Promise<Deal[]>;
}
