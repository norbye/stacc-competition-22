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
      <div>
        <h2>Fake bids</h2>
        <div>
          <div>
            <p>Bid made: 22/01/2022, bidder: Jonatan, amount: 20 WEI</p>
          </div>
        </div>
        <div>
          <h3>Make new bid</h3>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" />
          <label htmlFor="amount">Bid amount (WEI)</label>
          <input type="number" id="amount" />
        </div>
        <button>New bid</button>
      </div>
    </main>
  );
}
