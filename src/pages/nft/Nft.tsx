import { gql, useQuery } from "@apollo/client";
import { Collection } from "../../features/collections/Collection";
import { CollectionNfts } from "../../features/collections/CollectionNfts";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  clear,
  selectCollections,
} from "../../features/collections/collectionSlice";
import styles from "./Nft.module.css";
import { useParams } from "react-router-dom";
import { formatPrice } from "../../app/utils";
import { Bids } from "../../features/bids/Bids";

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

export function Nft() {
  const selectedCollections = useAppSelector(selectCollections);
  const dispatch = useAppDispatch();

  const { assetId } = useParams();

  const { loading, error, data } = useQuery(ITEM, {
    variables: { id: parseInt(assetId ?? "0") },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data.items.length === 0) return <p>Found no asset with that id</p>;

  return (
    <main className={styles.nft}>
      <div>
        <img width="400" height="400" src={data.items[0].image_url} />
        <h2>{data.items[0].name}</h2>
        {data.items[0].last_sale?.total_price ? (
          <p>
            {"Last sold for: " +
              formatPrice(data.items[0].last_sale?.total_price)}
          </p>
        ) : null}
        {data.items[0].creator?.user?.username ? (
          <span>By {data.items[0].creator.user.username}</span>
        ) : null}
      </div>
      <Bids />
    </main>
  );
}
