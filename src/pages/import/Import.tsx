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
  let address: HTMLInputElement | null;
  let token_id: HTMLInputElement | null;

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

  return (
    <main className={styles.import}>
      <h2>Import NFT</h2>
      <p>Address of the contract for the NFT</p>
      <input
        ref={(node) => {
          address = node;
        }}
      />
      <p>Token ID for the NFT</p>
      <input
        ref={(node) => {
          token_id = node;
        }}
      />
      <button
        onClick={() => {
          importNft({
            variables: {
              input: {
                asset_contract_address: address?.value,
                token_id: token_id?.value,
              },
            },
          });
          setInsertNft(false);
          address = null;
          token_id = null;
        }}
      >
        Import
      </button>
    </main>
  );
}
