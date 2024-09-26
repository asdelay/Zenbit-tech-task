import { Injectable } from '@nestjs/common';
import { Deal } from './deals.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DealsService {
    constructor(@InjectModel(Deal) private dealRepository: typeof Deal){}

    async getOneDeal (id:number) {
        const deal = await this.dealRepository.findByPk(id)
        if(!deal) {
            console.log("error deal not found")
            return 0
        }
        return deal
    }

    async getAllDeals() {
        const users = await this.dealRepository.findAll()
        return users
    }
}
