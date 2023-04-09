import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./Blog";
import Bookmark from "./Bookmark";

const Contents = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookMarks, setBookMark] = useState([]);
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);
  const [allId, setAllId] = useState([]);

  useEffect(() => {
    fetch("blogs.json").then((res) =>
      res.json().then((data) => setBlogs(data))
    );
  }, []);

  const bookMarkBlog = (id) => {
    const exist = allId.includes(id);
    if (!exist) {
      toast.success("Added to Bookmarks");
      setAllId([...allId, id]);
      let addedBlog = blogs.find((blg) => id === blg.id);
      let newBookMark = [...bookMarks, addedBlog.title];
      setBookMark(newBookMark);
      setCount(count + 1);
    } else {
      toast.error("This Blog is already Bookmarked");
    }
  };

  const bookMarkRead = (id) => {
    let addedBlog = blogs.find((blg) => id === blg.id);
    setTime(time + addedBlog.time);
  };

  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start relative">
      <div className="max-w-5xl h-auto">
        {blogs.map((blog) => {
          return (
            <Blog
              key={blog.id}
              blog={blog}
              bookMarkBlog={bookMarkBlog}
              bookMarkRead={bookMarkRead}
            />
          );
        })}
      </div>

      {/*************************************** Bookmark *****************************************/}
      <div className="abosolute top-0 right-0 w-96 z-10">
        <div className="py-4 px-8 bg-gray-200 m-6 rounded-md">
          <h3 className="font-semibold text-indigo-600">
            Spent time on read: {time} min
          </h3>
        </div>

        <div className="py-4 px-4 bg-gray-200 m-6 rounded-md">
          <h3 className="font-semibold text-indigo-600">
            Bookmarked Blogs: {count}
          </h3>

          {bookMarks.map((bookMark) => {
            // console.log(bookMark);
            return <Bookmark bookMark={bookMark} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Contents;
