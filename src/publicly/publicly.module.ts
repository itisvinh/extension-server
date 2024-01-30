import { Module } from '@nestjs/common';
import { PubliclyService } from './publicly.service';
import { PubliclyController } from './publicly.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BidData, BidDataSchema } from './bid_data.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: BidData.name, schema: BidDataSchema }])],
  providers: [PubliclyService],
  controllers: [PubliclyController]
})
export class PubliclyModule {}
