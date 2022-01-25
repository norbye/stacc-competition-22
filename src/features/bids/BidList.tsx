import styles from "./Bids.module.css";
import { formatPrice } from "../../app/utils";

interface IBidListProps {
  bids: {
    sum: string;
    date: string;
    personName: string;
  }[];
}

export function BidList(props: IBidListProps) {
  return (
    <div className={styles.bidList}>
      <div className={styles.header}>
        <div>Date</div>
        <div>Bidder</div>
        <div>Sum</div>
      </div>
      {props.bids.map((bid) => (
        <div key={bid.sum + bid.date}>
          <div>{bid.date}</div>
          <div>{bid.personName}</div>
          <div>{bid.sum} WEI</div>
        </div>
      ))}
    </div>
  );
}
