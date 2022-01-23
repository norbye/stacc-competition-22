import { Document } from 'mongoose';

export interface Nft extends Document {
  id: Number;
  token_id: String;
  num_sales: Number;
  background_color: String;
  image_url: String;
  image_preview_url: String;
  image_thumbnail_url: String;
  image_original_url: String;
  animation_url: String;
  animation_original_url: String;
  name: String;
  description: String;
  external_link: String;
  asset_contract: {
    address: String;
    asset_contract_type: String;
    created_date: String;
    name: String;
    nft_version: String;
    opensea_version: String;
    owner: String;
    schema_name: String;
    symbol: String;
    total_supply: String;
    description: String;
    external_link: String;
    image_url: String;
    default_to_fiat: Boolean;
    dev_buyer_fee_basis_points: Number;
    dev_seller_fee_basis_points: Number;
    only_proxied_transfers: Boolean;
    opensea_buyer_fee_basis_points: Number;
    opensea_seller_fee_basis_points: Number;
    buyer_fee_basis_points: Number;
    seller_fee_basis_points: Number;
    payout_address: String;
  };
  permalink: String;
  nft_collection: Collection;
  decimals: String;
  token_metadata: String;
  owner: Person;
  sell_orders: String;
  creator: Person;
  traits: Trait[];
  last_sale: {
    asset: {
      token_id: String;
      decimals: String;
    };
    asset_bundle: String;
    event_type: String;
    event_timestamp: String;
    auction_type: String;
    total_price: String;
    payment_token: {
      id: Number;
      symbol: String;
      address: String;
      image_url: String;
      name: String;
      decimals: Number;
      eth_price: String;
      usd_price: String;
    };
    transaction: {
      block_hash: String;
      block_number: String;
      from_account: Person;
      id: Number;
      timestamp: String;
      to_account: Person;
      transaction_hash: String;
      transaction_index: String;
    };
    created_date: String;
    quantity: String;
  };
  top_bid: String;
  listing_date: String;
  is_presale: Boolean;
  transfer_fee_payment_token: String;
  transfer_fee: String;
}

export interface Collection extends Document {
  banner_image_url: String;
  chat_url: String;
  created_date: String;
  default_to_fiat: Boolean;
  description: String;
  dev_buyer_fee_basis_points: String;
  dev_seller_fee_basis_points: String;
  discord_url: String;
  display_data: {
    card_display_style: String;
  };
  external_url: String;
  featured: Boolean;
  featured_image_url: String;
  hidden: Boolean;
  safelist_request_status: String;
  image_url: String;
  is_subject_to_whitelist: Boolean;
  large_image_url: String;
  medium_username: String;
  name: String;
  only_proxied_transfers: Boolean;
  opensea_buyer_fee_basis_points: String;
  opensea_seller_fee_basis_points: String;
  payout_address: String;
  require_email: Boolean;
  short_description: String;
  slug: String;
  telegram_url: String;
  twitter_username: String;
  instagram_username: String;
  wiki_url: String;
}

export interface Person extends Document {
  user: {
    username: String;
  };
  profile_img_url: String;
  address: String;
  config: String;
}

export interface Trait extends Document {
  trait_type: String;
  value: String;
  display_type: String;
  max_value: String;
  trait_count: Number;
  order: String;
}
