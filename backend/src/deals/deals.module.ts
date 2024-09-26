import { Module } from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Deal } from './deals.model';

@Module({
  providers: [DealsService],
  controllers: [DealsController],
  imports: [SequelizeModule.forFeature([Deal])]
})
export class DealsModule {}
