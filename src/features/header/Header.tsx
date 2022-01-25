import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <div className={styles.logoWrapper}>
          <span>]NFTBase[</span>
        </div>
      </Link>
      <span>
        <Link to={"/gallery"}>Gallery</Link>
      </span>
      <span>
        <Link to={"/import"}>Import NFT</Link>
      </span>
    </header>
  );
}
