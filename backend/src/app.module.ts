import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { AuthModule } from './auth/auth.module';
import { DealsModule } from './deals/deals.module';
import { Deal} from "./deals/deals.model";

@Module ( {
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),

        //hardcoded credential for project to run locally
        SequelizeModule.forRoot({
          dialect: 'postgres',
          host: 'c3l5o0rb2a6o4l.cluster-czz5s0kz4scl.eu-west-1.rds.amazonaws.com', 
          port: 5432,
          username: 'ud3jgalol1nm1g',
          password: 'p6e3aef7e0b4ca176c908b66421930b96d6e9b00d3221651d8edfb13457b2af11',
          uri: 'postgres://ud3jgalol1nm1g:p6e3aef7e0b4ca176c908b66421930b96d6e9b00d3221651d8edfb13457b2af11@c3l5o0rb2a6o4l.cluster-czz5s0kz4scl.eu-west-1.rds.amazonaws.com:5432/dflr3ocd7b9j5e',
          database: 'dflr3ocd7b9j5e',
          models: [User, Deal],
          autoLoadModels: true,
          dialectOptions: {
            ssl: {
              require: true, // This will help you. But you will see nwe error
              rejectUnauthorized: false // This line will fix new error
            }
          },
        }),
        UsersModule,
        AuthModule,
        DealsModule,
      ],
})
export class AppModule {

}