import { Link } from "react-router-dom";
import styles from "./CollectionItem.module.css";

interface ICollectionItemProps {
  id: string;
  image_url: string;
  title: string;
  creator?: string;
  description?: string;
  collection?: string;
}

export function CollectionItem(props: ICollectionItemProps) {
  return (
    <div className={styles.item}>
      <img width="400" height="400" src={props.image_url} />
      <strong>{props.title}</strong>
      {props.collection ? <p>{props.collection}</p> : null}
      {props.description ? <p>{props.description}</p> : null}
      {props.creator ? <span>By {props.creator}</span> : null}
    </div>
  );
}
