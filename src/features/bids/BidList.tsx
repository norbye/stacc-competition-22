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

export function BidList() {
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
        <p>Bid made: 22/01/2022, bidder: Jonatan, amount: 20 WEI</p>
      </div>
    </div>
  );
}
