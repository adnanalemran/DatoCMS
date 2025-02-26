import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the dynamic URL parameter
import { fetchPostById } from "../api/datocms"; // API call for individual post
import { Link } from "react-router-dom";

const PostPage = () => {
  const { id } = useParams(); // Get the dynamic post id from URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const data = await fetchPostById(id); // Fetch the post by ID
      setPost(data); // Set the post data
      console.log(data);
    };

    if (id) {
      getPost();
    }
  }, [id]);

  if (!post) {
    return (
      <div className="container mx-auto p-6">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500">
        Published: {new Date(post._firstPublishedAt).toLocaleDateString()}
      </p>
      {post.coverImage && (
        <img
          src={post.coverImage.url}
          alt={post.title}
          className="w-full h-96 object-cover rounded mt-4"
        />
      )}
      <div className="mt-6 text-lg text-gray-700">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <div className="mt-6">
        <Link to="/" className="text-blue-600 hover:underline">
          Back to Posts
        </Link>
      </div>
    </div>
  );
};

export default PostPage;
