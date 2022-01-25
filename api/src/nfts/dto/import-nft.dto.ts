import { Injectable } from '@nestjs/common';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsObject,
} from 'class-validator';
import { CollectionType } from './collection.dto';

@ObjectType()
class UserType {
  @Field({ nullable: true })
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
export class LastSaleType {
  @Field({ nullable: true })
  @IsString()
  readonly total_price: string;
}

@ObjectType()
export class NftType {
  @Field(() => Int)
  @IsNumber()
  readonly id: number;
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
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
  @Field(() => CollectionType, { nullable: true })
  readonly nft_collection: CollectionType;
  @Field(() => LastSaleType, { nullable: true })
  readonly last_sale: LastSaleType;
}
