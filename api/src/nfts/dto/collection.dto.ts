import { ObjectType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { NftType } from './import-nft.dto';

@ObjectType()
export class CollectionType {
  @Field()
  @IsString()
  readonly _id: string;
  @Field()
  @IsString()
  readonly name: string;
  @Field()
  @IsString()
  readonly slug: string;
  @Field()
  @IsString()
  readonly description: string;
  @Field()
  @IsString()
  readonly image_url: string;
  @Field(() => [NftType], { nullable: true })
  readonly nfts: [NftType];
}
