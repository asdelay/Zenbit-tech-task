import { Controller, Get, Param } from '@nestjs/common';
import { DealsService } from './deals.service';

@Controller('deals')
export class DealsController {
    constructor(private dealsService: DealsService){}

    @Get()
    getAll() {
        return this.dealsService.getAllDeals()
    }

    @Get(':id')
    getOne(@Param('id') id:number) {
        return this.dealsService.getOneDeal(id)
    }
}
