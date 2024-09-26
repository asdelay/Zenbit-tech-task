"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealsService = void 0;
const common_1 = require("@nestjs/common");
const deals_model_1 = require("./deals.model");
const sequelize_1 = require("@nestjs/sequelize");
let DealsService = class DealsService {
    constructor(dealRepository) {
        this.dealRepository = dealRepository;
    }
    async getOneDeal(id) {
        const deal = await this.dealRepository.findByPk(id);
        if (!deal) {
            console.log("error deal not found");
            return 0;
        }
        return deal;
    }
    async getAllDeals() {
        const users = await this.dealRepository.findAll();
        return users;
    }
};
exports.DealsService = DealsService;
exports.DealsService = DealsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(deals_model_1.Deal)),
    __metadata("design:paramtypes", [Object])
], DealsService);
//# sourceMappingURL=deals.service.js.map