import { Module } from '@nestjs/common';
import { BidResolver, CollectionResolver, NftsResolver } from './nft.resolver';
import {
  BidSchema,
  CollectionSchema,
  NftSchema,
  PersonSchema,
  TraitSchema,
} from './nft.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { NftService } from './nft.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Nft', schema: NftSchema },
      { name: 'Collection', schema: CollectionSchema },
      { name: 'Person', schema: PersonSchema },
      { name: 'Trait', schema: TraitSchema },
      { name: 'Bid', schema: BidSchema },
    ]),
  ],
  providers: [NftsResolver, NftService, CollectionResolver, BidResolver],
})
export class NftsModule {}
