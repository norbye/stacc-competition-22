import { gql, useQuery } from "@apollo/client";
import { Collection } from "../../features/collections/Collection";
import { CollectionNfts } from "../../features/collections/CollectionNfts";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  clear,
  selectCollections,
} from "../../features/collections/collectionSlice";
import styles from "./";
import { useParams } from "react-router-dom";
import { formatPrice } from "../../app/utils";
import { NewBid } from "./NewBid";
import { BidList } from "./BidList";

export function Bids() {
  const selectedCollections = useAppSelector(selectCollections);
  const dispatch = useAppDispatch();

  const { assetId } = useParams();

  return (
    <div>
      <h2>Fake bids</h2>
      <BidList />
      <NewBid />
    </div>
  );
}
