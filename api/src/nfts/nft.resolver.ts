import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { NftService } from './nft.service';
import { CollectionType, NftType, PersonType } from './dto/import-nft.dto';
import { ImportNftInput, NftInput } from './input-nft.input';
import { Collection, Nft } from './interfaces/nft.interface';

@Resolver((of) => NftType)
export class NftsResolver {
  constructor(private readonly nftService: NftService) {}

  @Query(() => [NftType])
  async items(): Promise<Nft[]> {
    return this.nftService.findAll();
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

  @Query(() => String)
  async hello() {
    return 'hello';
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
