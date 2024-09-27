"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const users_model_1 = require("./users/users.model");
const auth_module_1 = require("./auth/auth.module");
const deals_module_1 = require("./deals/deals.module");
const deals_model_1 = require("./deals/deals.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env'
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: 'c3l5o0rb2a6o4l.cluster-czz5s0kz4scl.eu-west-1.rds.amazonaws.com',
                port: 5432,
                username: 'ud3jgalol1nm1g',
                password: 'p6e3aef7e0b4ca176c908b66421930b96d6e9b00d3221651d8edfb13457b2af11',
                uri: 'postgres://ud3jgalol1nm1g:p6e3aef7e0b4ca176c908b66421930b96d6e9b00d3221651d8edfb13457b2af11@c3l5o0rb2a6o4l.cluster-czz5s0kz4scl.eu-west-1.rds.amazonaws.com:5432/dflr3ocd7b9j5e',
                database: 'dflr3ocd7b9j5e',
                models: [users_model_1.User, deals_model_1.Deal],
                autoLoadModels: true,
                dialectOptions: {
                    ssl: {
                        require: true,
                        rejectUnauthorized: false
                    }
                },
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            deals_module_1.DealsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map