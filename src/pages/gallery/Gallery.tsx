import { gql, useQuery } from "@apollo/client";
import { Collection } from "../../features/collections/Collection";
import { CollectionNfts } from "../../features/collections/CollectionNfts";

const ITEMS = gql`
  {
    items {
      id
      name
      creator {
        user {
          username
        }
      }
      description
      image_url
    }
    collections {
      _id
      name
      slug
      description
      image_url
      nfts {
        name
        id
      }
    }
  }
`;

export function Gallery() {
  const { loading, error, data } = useQuery(ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <main>
      <h2>Collections</h2>
      <Collection data={data.collections} />
      <h2>NFTs</h2>
      <CollectionNfts data={data.items} />
    </main>
  );
}
