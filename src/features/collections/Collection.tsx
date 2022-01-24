import { Link } from "react-router-dom";
import styles from "./Collection.module.css";
import { CollectionItem } from "./CollectionItem";

interface ICollectionProps {
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
  direction: "VERTICAL" | "HORIZONTAL";
}

export function Collection(props: ICollectionProps) {
  return (
    <div className={styles.collections}>
      {props.data?.map((collection) => (
        <CollectionItem {...collection} key={collection.id} />
      ))}
    </div>
  );
}
