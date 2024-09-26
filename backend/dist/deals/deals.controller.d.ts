import { DealsService } from './deals.service';
export declare class DealsController {
    private dealsService;
    constructor(dealsService: DealsService);
    getAll(): Promise<import("./deals.model").Deal[]>;
    getOne(id: number): Promise<0 | import("./deals.model").Deal>;
}
