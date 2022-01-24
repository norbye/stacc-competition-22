import { Module } from '@nestjs/common';
import { CollectionResolver, NftsResolver } from './nft.resolver';
import {
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
    ]),
  ],
  providers: [NftsResolver, NftService, CollectionResolver],
})
export class NftsModule {}
