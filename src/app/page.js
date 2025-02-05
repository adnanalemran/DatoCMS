import Image from "next/image";
import { gql, GraphQLClient } from "graphql-request";

const query = gql`
  query {
    course {
      id
      name
      slug
      courseDetails {
        ... on CourseHeaderRecord {
          id
          __typename
          smallTitle
          bigTitle
          buttonText
          description
        }
      }
    }
  }
`;

// ✅ Fetch data inside a Server Component (Next.js 15)
async function fetchData() {
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });

  const data = await graphQLClient.request(query);
  return data;
}

export default async function Home() {
  const data = await fetchData();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>This is a test</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
