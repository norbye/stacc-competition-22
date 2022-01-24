import { gql, useQuery } from "@apollo/client";
import { Collection } from "../../features/collections/Collection";

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
  }
`;

export function Gallery() {
  const { loading, error, data } = useQuery(ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <main>
      <h2>Collections</h2>
      <Collection direction={"HORIZONTAL"} />
      <h2>NFTs</h2>
      <Collection direction={"VERTICAL"} data={data.items} />
    </main>
  );
}
