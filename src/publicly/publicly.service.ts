import { Injectable } from '@nestjs/common';
import UUID_util from 'src/lib/uuid/util';
import { BidData } from './bid_data.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PubliclyService {
    constructor(@InjectModel(BidData.name) private bidDataModel: Model<BidData>) {}

    async saveNewBidData(data: BidData) {
        const createdBidData = new this.bidDataModel({
            bidDataId: UUID_util.create(),
            url: data.url,
            name: data.name,
            price: data.price,
            productImage: data.productImage
        });

        const error = createdBidData.validateSync()

        return !error ? createdBidData.save() : undefined
    }

    async getAllBidData() {
        return this.bidDataModel.find().exec();
    }

    async clearAllBidData() {
        return this.bidDataModel.deleteMany({})
    }
}
