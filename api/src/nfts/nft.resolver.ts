import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { NftService } from './nft.service';
import { NftType, PersonType } from './dto/import-nft.dto';
import { ImportNftInput, NftInput } from './input-nft.input';
import { Nft } from './interfaces/nft.interface';

@Resolver((of) => NftType)
export class NftsResolver {
  constructor(private readonly nftService: NftService) {}

  @Query(() => [NftType])
  async items(): Promise<NftType[]> {
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

  @Mutation(() => NftType)
  async importNft(@Args('input') input: ImportNftInput): Promise<NftType> {
    return this.nftService.importNft(input);
  }

  @Mutation(() => NftType)
  async createNft(@Args('input') input: NftInput): Promise<NftType> {
    return this.nftService.create(input);
  }

  @Mutation(() => NftType)
  async updateItem(@Args('id') id: string, @Args('input') input: NftInput) {
    return this.nftService.update(id, input as unknown as Nft);
  }

  @Mutation(() => NftType)
  async deleteItem(@Args('id') id: string) {
    return this.nftService.delete(id);
  }

  @Query(() => String)
  async hello() {
    return 'hello';
  }
}
