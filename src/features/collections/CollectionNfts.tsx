import styles from "./Collection.module.css";
import { CollectionItem } from "./CollectionItem";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggle, selectCollections } from "./collectionSlice";
import { formatPrice } from "../../app/utils";
import { Link } from "react-router-dom";

interface ICollectionNftsProps {
  data?: {
    id: string;
    image_url: string;
    name: string;
    creator: {
      user: {
        username: string;
      };
    };
    description?: string;
    collection?: string;
    nft_collection?: {
      _id: string;
    };
    last_sale?: {
      total_price: string;
    };
  }[];
}

export function CollectionNfts(props: ICollectionNftsProps) {
  const selectedCollections = useAppSelector(selectCollections);
  return (
    <div className={styles.nfts}>
      {props.data
        ?.filter(
          (nft, pos) =>
            (selectedCollections.includes(nft.nft_collection?._id ?? "") ||
              selectedCollections.length === 0) &&
            props.data?.indexOf(nft) === pos
        )
        .map((nft) => (
          <Link to={"/asset/" + nft.id} key={nft.id}>
            <CollectionItem
              id={nft.id}
              title={nft.name}
              description={
                "Last sold for: " + formatPrice(nft.last_sale?.total_price)
              }
              image_url={nft.image_url}
              creator={nft.creator.user.username}
            />
          </Link>
        ))}
    </div>
  );
}
