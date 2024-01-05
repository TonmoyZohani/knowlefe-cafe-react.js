import React, { createContext } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogTitle, setBlogTitle] = useState("Default Text");

  return (
    <BlogContext.Provider value={{ blogTitle, setBlogTitle }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
