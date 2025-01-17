import { useEffect, useState } from "react";
import client from "./datoClient";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        {
          allBlogPosts {
            title
            content
            coverImage {
              url
            }
          }
        }
      `;

      try {
        const response = await client.request({ query });
        setData(response.allBlogPosts);
      } catch (error) {
        console.error("Error fetching data from DatoCMS:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {data ? (
        data.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.coverImage && (
              <img src={post.coverImage.url} alt={post.title} />
            )}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
