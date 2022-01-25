import styles from "./Collection.module.css";
import { CollectionItem } from "./CollectionItem";

interface ICollectionProps {
  data?: {
    _id: string;
    name: string;
    slug: string;
    description: string;
    image_url: string;
    nfts: {
      name: string;
      id: number;
    }[];
  }[];
}

export function Collection(props: ICollectionProps) {
  return (
    <div className={styles.collections}>
      {props.data?.map((collection) => (
        <CollectionItem
          id={collection._id}
          image_url={collection.image_url}
          title={collection.name}
          key={collection._id}
        />
      ))}
    </div>
  );
}
