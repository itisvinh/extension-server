import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, InternalServerErrorException, Post, Req, UnsupportedMediaTypeException } from '@nestjs/common';
import { BidData } from './bid_data.schema';
import { PubliclyService } from './publicly.service';

@Controller('public')
export class PubliclyController {
    constructor(private publiclyService : PubliclyService) {}

    @HttpCode(HttpStatus.OK)
    @Get('selector')
    getSelector() {
        return {
            BID_BTN: 'div.vim ul.x-buybox-cta li div.vim.x-bid-action',
            BID_BTN_CONTAINER: 'div.vim.vi-evo-row-gap ul.x-buybox-cta.mar-t-20',
            PRODUCT_NAME:
                'div#mainContent div.vim.x-item-title h1.x-item-title__mainTitle span.ux-textspans.ux-textspans--BOLD',
            PRODUCT_PRICE_MAIN:
                'div#mainContent div.vim.x-price-section div.x-price-primary span',
            PRODUCT_IMG: 'div.main-container div.ux-image-carousel-container div.ux-image-carousel-item img'
        }
    }

    @HttpCode(HttpStatus.OK)
    @Post('upload/bid-data')
    async uploadBidData(@Body() bidDataDto: BidData) {
        console.log('received bid data: ', bidDataDto)
        const data = await this.publiclyService.saveNewBidData(bidDataDto)

        if (!data) 
            throw new BadRequestException()
    }

    @Get('get/bid-data')
    async getAllBidData() {
        return this.publiclyService.getAllBidData()
    }

    @HttpCode(HttpStatus.OK)
    @Delete('delete-all/bid-data')
    async deleteAllBidData() {
        const result = await this.publiclyService.clearAllBidData()
        if (result.deletedCount === 0)
            throw new HttpException('Not modified', HttpStatus.NOT_MODIFIED)
    }


}
