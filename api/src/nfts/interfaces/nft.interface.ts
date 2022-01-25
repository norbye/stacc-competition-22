import { Document } from 'mongoose';

export interface Bid extends Document {
  personName: string;
  sum: string;
  date: Date;
  nft: string;
}

export interface Nft extends Document {
  id: number;
  token_id: string;
  num_sales: number;
  background_color: string;
  image_url: string;
  image_preview_url: string;
  image_thumbnail_url: string;
  image_original_url: string;
  animation_url: string;
  animation_original_url: string;
  name: string;
  description: string;
  external_link: string;
  asset_contract: {
    address: string;
    asset_contract_type: string;
    created_date: string;
    name: string;
    nft_version: string;
    opensea_version: string;
    owner: string;
    schema_name: string;
    symbol: string;
    total_supply: string;
    description: string;
    external_link: string;
    image_url: string;
    default_to_fiat: boolean;
    dev_buyer_fee_basis_points: number;
    dev_seller_fee_basis_points: number;
    only_proxied_transfers: boolean;
    opensea_buyer_fee_basis_points: number;
    opensea_seller_fee_basis_points: number;
    buyer_fee_basis_points: number;
    seller_fee_basis_points: number;
    payout_address: string;
  };
  permalink: string;
  nft_collection: Collection;
  decimals: string;
  token_metadata: string;
  owner: Person;
  sell_orders: string;
  creator: Person;
  traits: Trait[];
  last_sale: {
    asset: {
      token_id: string;
      decimals: string;
    };
    asset_bundle: string;
    event_type: string;
    event_timestamp: string;
    auction_type: string;
    total_price: string;
    payment_token: {
      id: number;
      symbol: string;
      address: string;
      image_url: string;
      name: string;
      decimals: number;
      eth_price: string;
      usd_price: string;
    };
    transaction: {
      block_hash: string;
      block_number: string;
      from_account: Person;
      id: number;
      timestamp: string;
      to_account: Person;
      transaction_hash: string;
      transaction_index: string;
    };
    created_date: string;
    quantity: string;
  };
  top_bid: string;
  listing_date: string;
  is_presale: boolean;
  transfer_fee_payment_token: string;
  transfer_fee: string;
}

export interface Collection extends Document {
  banner_image_url: string;
  chat_url: string;
  created_date: string;
  default_to_fiat: boolean;
  description: string;
  dev_buyer_fee_basis_points: string;
  dev_seller_fee_basis_points: string;
  discord_url: string;
  display_data: {
    card_display_style: string;
  };
  external_url: string;
  featured: boolean;
  featured_image_url: string;
  hidden: boolean;
  safelist_request_status: string;
  image_url: string;
  is_subject_to_whitelist: boolean;
  large_image_url: string;
  medium_username: string;
  name: string;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: string;
  opensea_seller_fee_basis_points: string;
  payout_address: string;
  require_email: boolean;
  short_description: string;
  slug: string;
  telegram_url: string;
  twitter_username: string;
  instagram_username: string;
  wiki_url: string;
}

export interface Person extends Document {
  user: {
    username: string;
  };
  profile_img_url: string;
  address: string;
  config: string;
}

export interface Trait extends Document {
  trait_type: string;
  value: string;
  display_type: string;
  max_value: string;
  trait_count: number;
  order: string;
}
