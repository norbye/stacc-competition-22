import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsObject,
} from 'class-validator';

@ObjectType()
class UserType {
  @Field()
  @IsString()
  readonly username: string;
}

@ObjectType()
export class PersonType {
  @Field(() => UserType, { nullable: true })
  @IsObject()
  readonly user: UserType;
  @Field()
  @IsString()
  readonly profile_img_url: string;
  @Field()
  @IsString()
  readonly address: string;
  @Field()
  @IsString()
  readonly config: string;
}

@ObjectType()
export class NftType {
  @Field(() => Int)
  @IsNumber()
  readonly id: number;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  readonly description: string;
  @Field()
  @IsString()
  readonly image_url: string;
  @Field(() => PersonType, { nullable: true })
  readonly owner: PersonType;
  @Field(() => PersonType, { nullable: true })
  readonly creator: PersonType;
}

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
