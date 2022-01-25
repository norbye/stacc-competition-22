import { gql, useQuery } from "@apollo/client";
import styles from "./Bids.module.css";
import { useParams } from "react-router-dom";
import { NewBid } from "./NewBid";
import { BidList } from "./BidList";

const ITEM = gql`
  query FindItems($id: Float) {
    items(id: $id) {
      _id
      bids {
        personName
        date
        sum
      }
    }
  }
`;

export function Bids() {
  const { assetId } = useParams();

  const { loading, error, data, refetch } = useQuery(ITEM, {
    variables: { id: parseInt(assetId ?? "0") },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Fake bids</h2>
      <BidList bids={data.items[0].bids} />
      <NewBid nftId={data.items[0]._id} refetch={() => refetch()} />
    </div>
  );
}
