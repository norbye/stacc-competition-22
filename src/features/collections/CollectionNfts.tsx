import styles from "./Collection.module.css";
import { CollectionItem } from "./CollectionItem";

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
  }[];
}

export function CollectionNfts(props: ICollectionNftsProps) {
  return (
    <div className={styles.nfts}>
      {props.data?.map((nft) => (
        <CollectionItem
          id={nft.id}
          title={nft.name}
          image_url={nft.image_url}
          creator={nft.creator.user.username}
          key={nft.id}
        />
      ))}
    </div>
  );
}
