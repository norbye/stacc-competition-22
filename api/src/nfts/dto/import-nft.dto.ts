import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsObject,
} from 'class-validator';
import { Person } from '../interfaces/nft.interface';
import { PersonSchema } from '../nft.schema';

@ObjectType()
class UserType {
  @Field()
  @IsString()
  readonly username: String;
}

@ObjectType()
export class PersonType {
  @Field(() => UserType, { nullable: true })
  @IsObject()
  readonly user: UserType;
  @Field()
  @IsString()
  readonly profile_img_url: String;
  @Field()
  @IsString()
  readonly address: String;
  @Field()
  @IsString()
  readonly config: String;
}

@ObjectType()
export class NftType {
  @Field(() => Int)
  @IsNumber()
  readonly id: Number;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly name: String;
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  readonly description: String;
  @Field()
  @IsString()
  readonly image_url: String;
  @Field(() => PersonType, { nullable: true })
  readonly owner: PersonType;
  @Field(() => PersonType, { nullable: true })
  readonly creator: PersonType;
}
