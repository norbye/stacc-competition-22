import { InputType, Field, Int } from '@nestjs/graphql';

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
