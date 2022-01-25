import styles from "./Collection.module.css";
import { CollectionItem } from "./CollectionItem";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggle, selectCollections } from "./collectionSlice";

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
  const selectedCollections = useAppSelector(selectCollections);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.collections}>
      {props.data
        ?.filter(
          (collection) =>
            props.data?.find((coll) => coll.slug === collection.slug) ===
            collection
        )
        .map((collection) => (
          <CollectionItem
            id={collection._id}
            image_url={collection.image_url}
            title={collection.name}
            key={collection._id}
            onClick={() => {
              dispatch(toggle(collection._id));
            }}
            selected={selectedCollections.includes(collection._id)}
          />
        ))}
    </div>
  );
}
