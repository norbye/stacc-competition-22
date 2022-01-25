import styles from "./Home.module.css";

export function Home() {
  return (
    <main className={styles.home}>
      <h1>NFTBase</h1>
      <p>
        Project repo:{" "}
        <a
          href="https://github.com/norbye/stacc-competition-22"
          target={"_blank"}
          rel="noreferrer"
        >
          Github
        </a>
      </p>
      <h2>Main functionality</h2>
      <p>
        1. Import NFTs from opensea.io to a custom NestJS + GraphQL + MongoDB
        backend.
      </p>
      <p>
        2. Display NFTs and their corresponding collections in a React +
        TypeScript frontend.
      </p>
      <p>
        3. Filter NFTs based on collection by clicking on one or more
        collections
      </p>
      <p>4. Add fake bids to NFTs</p>
    </main>
  );
}
