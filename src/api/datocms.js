import { request, gql } from "graphql-request";

const API_URL = "https://graphql.datocms.com/";
const API_TOKEN = "2c685e806928bb177c759d343ca0eb";
export const fetchPosts = async () => {
  const query = gql`
    {
      allBlogposts {
        id
        title
        _status
        _firstPublishedAt
      }

      _allBlogpostsMeta {
        count
      }
    }
  `;

  const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
  };

  try {
    const data = await request(API_URL, query, null, headers);
    return data.allBlogposts || []; // Ensure it returns an array
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const fetchPostById = async (id) => {
  const query = gql`
{
  allBlogposts(filter: {id: {in: [ ${id} ]}}) {
    id
    title
    content
    coverimage{
      url
    }  _status
        _firstPublishedAt
  }
}   
  `;

  const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
  };

  try {
    const data = await request(
      API_URL,
      query,
      { filter: { id: { eq: id } } },
      headers
    );
    return data.allBlogposts[0] || {}; // Ensure it returns the first post, or an empty object if not found
  } catch (error) {
    console.error("Error fetching post:", error);
    return {};
  }
};
