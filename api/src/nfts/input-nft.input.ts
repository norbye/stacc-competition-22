import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class NftInput {
  @Field()
  readonly token_id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly description: number;
}

@InputType()
export class ImportNftInput {
  @Field()
  readonly asset_contract_address: string;
  @Field()
  readonly token_id: string;
}

@InputType()
export class BidInput {
  @Field()
  readonly personName: string;
  @Field()
  readonly sum: string;
  @Field()
  readonly nft: string;
}
