import { gql, useQuery } from "@apollo/client";
import { Collection } from "../../features/collections/Collection";
import { CollectionNfts } from "../../features/collections/CollectionNfts";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  clear,
  selectCollections,
} from "../../features/collections/collectionSlice";
import styles from "./Gallery.module.css";

const ITEMS = gql`
  {
    items {
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
    }
    collections {
      _id
      name
      slug
      description
      image_url
      nfts {
        name
        id
      }
    }
  }
`;

export function Gallery() {
  const selectedCollections = useAppSelector(selectCollections);
  const dispatch = useAppDispatch();

  const { loading, error, data } = useQuery(ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <main className={styles.gallery}>
      <h2>Collections</h2>
      <p>Click on the collections of whose NFTs you want to display</p>
      {selectedCollections.length !== 0 ? (
        <button
          onClick={() => {
            dispatch(clear());
          }}
        >
          Display all NFTs
        </button>
      ) : null}
      <Collection data={data.collections} />
      <h2>NFTs</h2>
      <CollectionNfts data={data.items} />
    </main>
  );
}
