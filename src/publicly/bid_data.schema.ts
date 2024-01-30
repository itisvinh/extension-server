import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BidDataDocument = HydratedDocument<BidData>;

@Schema({ _id: false })
class Price {
  @Prop()
  unit: string

  @Prop()
  amount: number
}

@Schema()
export class BidData {
  @Prop({ required: true })
  bidDataId: string

  @Prop({ required: true })
  url: string

  @Prop({ type: Price, required: true })
  price: Price

  @Prop({ required: true })
  name: string

  @Prop()
  productImage: string
}

export const BidDataSchema = SchemaFactory.createForClass(BidData);