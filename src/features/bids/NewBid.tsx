import { gql, useMutation } from "@apollo/client";
import styles from "./Bids.module.css";
import { useState } from "react";

interface INewBidProps {
  nftId: string;
  refetch: () => void;
}

const MAKE_BID = gql`
  mutation MakeBid($input: BidInput!) {
    makeBid(input: $input) {
      personName
      sum
      date
    }
  }
`;

export function NewBid(props: INewBidProps) {
  const [importNft, { data, loading, error }] = useMutation(MAKE_BID);

  const [makeBid, setMakeBid] = useState(true);
  let personName: HTMLInputElement | null;
  let bidSum: HTMLInputElement | null;

  if (loading && !makeBid) return <p>Loading...</p>;
  if (error && !makeBid)
    return (
      <div className={styles.error}>
        <h2>Error</h2>
        <p>Failed to make bid</p>
        <button
          onClick={() => {
            setMakeBid(true);
          }}
        >
          Make another bid
        </button>
      </div>
    );

  if (data && !makeBid) {
    return (
      <main className={styles.import}>
        <h2>Bid made successfully</h2>
        <button
          onClick={() => {
            setMakeBid(true);
          }}
        >
          Make another Bid
        </button>
      </main>
    );
  }
  return (
    <div className={styles.newBidWrapper}>
      <div>
        <h3>Make new bid</h3>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          ref={(node) => {
            personName = node;
          }}
        />
        <label htmlFor="amount">Bid amount (WEI)</label>
        <input
          type="number"
          id="amount"
          ref={(node) => {
            bidSum = node;
          }}
        />
      </div>
      <button
        onClick={() => {
          importNft({
            variables: {
              input: {
                personName: personName?.value,
                sum: bidSum?.value,
                nft: props.nftId,
              },
            },
          }).then(() => props.refetch());
          setMakeBid(false);
          personName = null;
          bidSum = null;
        }}
      >
        Make bid
      </button>
    </div>
  );
}
