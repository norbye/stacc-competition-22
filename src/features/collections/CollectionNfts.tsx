import styles from "./Collection.module.css";
import { CollectionItem } from "./CollectionItem";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggle, selectCollections } from "./collectionSlice";

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
