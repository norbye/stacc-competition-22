import { Link } from "react-router-dom";
import styles from "./CollectionItem.module.css";

interface ICollectionItemProps {
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
}

export function CollectionItem(props: ICollectionItemProps) {
  return (
    <div className={styles.item}>
      <img width="400" height="400" src={props.image_url} />
      <strong>{props.name}</strong>
      {props.collection !== null ? <p>{props.collection}</p> : null}
      <span>By {props.creator.user.username}</span>
    </div>
  );
}
