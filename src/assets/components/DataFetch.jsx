import React from "react";
import { useState, useEffect } from "react";

const DataFetch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`
        );

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(posts);

  return (
    <div>
      {posts.map((post, i) => {
        return (
          <p>
            {i + 1}: {post.title}
          </p>
        );
      })}
    </div>
  );
};

export default DataFetch;
