import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { CollectionItem } from "../../features/collections/CollectionItem";
import styles from "./Import.module.css";

const IMPORT_NFT = gql`
  mutation ImportNft($input: ImportNftInput!) {
    importNft(input: $input) {
      id
      image_url
      name
      creator {
        user {
          username
        }
      }
    }
  }
`;

export function Import() {
  const [importNft, { data, loading, error }] = useMutation(IMPORT_NFT);

  const [insertNft, setInsertNft] = useState(true);
  const [urlValue, setUrlValue] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error && !insertNft)
    return (
      <div className={styles.error}>
        <h2>Error</h2>
        <p>Failed to import NFT</p>
        <button
          onClick={() => {
            setInsertNft(true);
          }}
        >
          Add another NFT
        </button>
      </div>
    );

  if (data && !insertNft) {
    return (
      <main className={styles.import}>
        <h2>NFT Imported successfully</h2>
        <CollectionItem
          id={data.importNft.id}
          title={data.importNft.name}
          image_url={data.importNft.image_url}
          creator={data.importNft.creator.user.username}
        />
        <button
          onClick={() => {
            setInsertNft(true);
          }}
        >
          Add another NFT
        </button>
      </main>
    );
  }

  const matchesRegex = (input: string): boolean => {
    const split = input.split("/");
    if (split.length < 4) return false;
    return (
      /^([0-9]*)$/.test(split[split.length - 1]) &&
      /^([a-z0-9]*)$/.test(split[split.length - 2]) &&
      split[split.length - 3] === "assets" &&
      split[split.length - 4] === "opensea.io"
    );
  };

  return (
    <main className={styles.import}>
      <h2>Import NFT</h2>
      <p>Insert opensea.io URL to NFT</p>
      <p>
        Only URLs on the form
        &quot;https://opensea.io/assets/&#123;address&#125;/&#123;token_id&#125;&quot;
        are accepted
      </p>
      <input
        className={matchesRegex(urlValue) ? undefined : styles.invalid}
        onChange={(e) => {
          setUrlValue(e.target.value);
        }}
      />
      <button
        disabled={!matchesRegex(urlValue)}
        onClick={() => {
          const split = urlValue.split("/");
          importNft({
            variables: {
              input: {
                asset_contract_address: split[split.length - 2],
                token_id: split[split.length - 1],
              },
            },
          });
          setInsertNft(false);
          setUrlValue("");
        }}
      >
        Import
      </button>
    </main>
  );
}
