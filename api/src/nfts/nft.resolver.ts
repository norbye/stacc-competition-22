import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { NftService } from './nft.service';
import { BidType, NftType, PersonType } from './dto/import-nft.dto';
import { BidInput, ImportNftInput, NftInput } from './input-nft.input';
import { Bid, Collection, Nft } from './interfaces/nft.interface';
import { CollectionType } from './dto/collection.dto';

@Resolver((of) => NftType)
export class NftsResolver {
  constructor(private readonly nftService: NftService) {}

  @Query(() => [NftType])
  async items(@Args('id', { nullable: true }) id?: number): Promise<Nft[]> {
    if (id === null) {
      return this.nftService.findAll();
    }
    return this.nftService.findNft(id);
  }

  /*@Query(() => PersonType)
  async owner(@Args('id') id: string): Promise<PersonType> {
    return this.nftService.findPerson(id);
  }*/

  @ResolveField(() => PersonType)
  async creator(@Parent() nft: NftType) {
    return this.nftService.findPerson(nft.id, 'creator');
  }

  @ResolveField(() => PersonType)
  async owner(@Parent() nft: NftType) {
    return this.nftService.findPerson(nft.id, 'owner');
  }

  @ResolveField(() => [BidType])
  async bids(@Parent() nft: Nft) {
    return this.nftService.findBids(nft._id);
  }

  @Mutation(() => NftType)
  async importNft(@Args('input') input: ImportNftInput): Promise<NftType> {
    return this.nftService.importNft(input);
  }
}

@Resolver((of) => CollectionType)
export class CollectionResolver {
  constructor(private readonly nftService: NftService) {}

  @Query(() => [CollectionType])
  async collections(): Promise<Collection[]> {
    return this.nftService.findAllCollections();
  }

  @ResolveField(() => NftType)
  async nfts(@Parent() nft_collection: CollectionType) {
    return this.nftService.findNfts(nft_collection._id);
  }
}

@Resolver((of) => BidType)
export class BidResolver {
  constructor(private readonly nftService: NftService) {}

  @Mutation(() => BidType)
  async makeBid(@Args('input') input: BidInput): Promise<BidType> {
    return this.nftService.createBid(input);
  }
}
