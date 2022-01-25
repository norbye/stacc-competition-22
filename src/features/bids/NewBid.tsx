import { gql, useQuery } from "@apollo/client";
import { Collection } from "../../features/collections/Collection";
import { CollectionNfts } from "../../features/collections/CollectionNfts";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  clear,
  selectCollections,
} from "../../features/collections/collectionSlice";
import styles from "./Bids.module.css";
import { useParams } from "react-router-dom";
import { formatPrice } from "../../app/utils";

const ITEM = gql`
  query FindItems($id: Float) {
    items(id: $id) {
      id
      name
      creator {
        user {
          username
        }
      }
      description
      image_url
      nft_collection {
        _id
      }
      last_sale {
        total_price
      }
    }
  }
`;

export function NewBid() {
  const selectedCollections = useAppSelector(selectCollections);
  const dispatch = useAppDispatch();

  const { assetId } = useParams();

  const { loading, error, data } = useQuery(ITEM, {
    variables: { id: parseInt(assetId ?? "0") },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <div>
        <h3>Make new bid</h3>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" />
        <label htmlFor="amount">Bid amount (WEI)</label>
        <input type="number" id="amount" />
      </div>
      <button>New bid</button>
    </div>
  );
}
