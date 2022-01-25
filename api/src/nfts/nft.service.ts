import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NftType } from './dto/import-nft.dto';
import { Nft, Person, Trait, Collection } from './interfaces/nft.interface';
import { ImportNftInput, NftInput } from './input-nft.input';

@Injectable()
export class NftService {
  constructor(
    @InjectModel('Nft') private nftModel: Model<Nft>,
    @InjectModel('Trait') private traitModel: Model<Trait>,
    @InjectModel('Person') private personModel: Model<Person>,
    @InjectModel('Collection') private collectionModel: Model<Collection>,
  ) {}

  async importNft(importNftDto: ImportNftInput): Promise<NftType> {
    // Fetch stuffs
    const res = await axios({
      url:
        'https://api.opensea.io/api/v1/asset/' +
        importNftDto.asset_contract_address +
        '/' +
        importNftDto.token_id +
        '/',
      method: 'get',
      timeout: 8000,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
        referrer: 'localhost',
        'Content-Type': 'application/json',
      },
    });
    if (res.status != 200) {
      // Handle error
      console.log('Failed to return data');
      console.log(res.status);
      console.log(res.data);
      return;
    }
    // Find or create Traits
    const traits = [];
    await res.data.traits.map((trait) => {
      this.findOrCreate(this.traitModel, trait, (err, doc) => {
        traits.push(doc?._id);
      });
    });
    res.data.traits = traits;
    // Find or create Person fields
    await this.findOrCreate(
      this.personModel,
      res.data.owner,
      (err, doc) => {
        res.data.owner = doc?._id;
      },
      { address: res.data.owner?.address },
    );
    await this.findOrCreate(
      this.personModel,
      res.data.creator,
      (err, doc) => {
        res.data.creator = doc?._id;
      },
      { address: res.data.creator?.address },
    );
    await this.findOrCreate(
      this.personModel,
      res.data.transaction?.from_account,
      (err, doc) => {
        res.data.transaction.from_account = doc?._id;
      },
      { address: res.data.transaction?.from_account?.address },
    );
    await this.findOrCreate(
      this.personModel,
      res.data.transaction?.to_account,
      (err, doc) => {
        res.data.transaction.to_account = doc?._id;
      },
      { address: res.data.transaction?.to_account?.address },
    );
    await this.findOrCreate(
      this.personModel,
      res.data.last_sale?.transaction?.from_account,
      (err, doc) => {
        res.data.last_sale.transaction.from_account = doc?._id;
      },
      {
        address: res.data.last_sale?.transaction?.from_account?.address,
      },
    );
    await this.findOrCreate(
      this.personModel,
      res.data.last_sale?.transaction?.to_account,
      (err, doc) => {
        res.data.last_sale.transaction.to_account = doc?._id;
      },
      {
        address: res.data.last_sale?.transaction?.to_account?.address,
      },
    );
    console.log(JSON.stringify(res.data));
    // Find or create Collection
    await this.findOrCreate(
      this.collectionModel,
      res.data.collection,
      (err, doc) => {
        res.data.nft_collection = doc?._id;
      },
      { collection: { slug: res.data.collection.slug } },
    );
    delete res.data.collection;
    console.log('name' + res.data.name);
    //console.log(res.data);
    // Create NFT
    return (await this.findOrCreate(
      this.nftModel,
      res.data,
      (err, doc) => {
        console.log(err);
        console.log(doc);
        return doc;
      },
      {
        token_id: res.data.token_id,
        asset_contract_address: res.data.asset_contract_address,
      },
    )) as NftType;
  }

  private async findOrCreate(model, data, callback, searchData = null) {
    if (data === undefined) {
      return;
    }
    return await model.findOneAndUpdate(
      searchData === null ? data : searchData,
      { $set: data },
      {
        upsert: true,
        new: true,
        useFindAndModify: false,
        returnOriginal: false,
        runValidators: true,
      },
      (err, doc) => callback(err, doc),
    );
  }

  async create(createItemDto: NftInput): Promise<NftType> {
    const createdItem = new this.nftModel(createItemDto);
    return (await createdItem.save()) as any;
  }

  async findAll(): Promise<Nft[]> {
    return await this.nftModel.find().exec();
  }

  async findAllCollections(): Promise<Collection[]> {
    return await this.collectionModel.find().exec();
  }

  async findNfts(collectionId: string): Promise<Nft[]> {
    return await this.nftModel.find({ nft_collection: collectionId });
  }

  async findPerson(id: number, field: string): Promise<Person> {
    return await this.personModel.findById(
      (
        await this.nftModel.findOne({ id: id })
      )[field],
    );
  }
}
