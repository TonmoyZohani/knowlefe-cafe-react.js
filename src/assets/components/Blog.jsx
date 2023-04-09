import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = (props) => {
  const { id, title, img, userImg, name, time, date } = props.blog;
  const bookMarkBlog = props.bookMarkBlog;
  const bookMarkRead = props.bookMarkRead;

  return (
    <div className="p-2 md:p-6 mt-2 mb-6 mx-4 border-2 rounded-lg">
      <div></div>
      <img
        src={img}
        alt=""
        className="object-cover h-40 w-full md:h-96  rounded-md"
      />

      <div className="flex justify-between items-center mt-4">
        <div className="flex justify-center items-center space-x-4">
          <img
            src={userImg}
            className="w-10 h-10 md:w-20 md:h-20 rounded-full object-center"
            alt=""
          />
          <div>
            <h4 className="font-bold md:text-xl">{name}</h4>
            <p className="text-gray-500 md:font-semibold">{date}</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <p className="text-slate-500 text-sm">{time} min read</p>
          <button className="text-indigo-600" onClick={() => bookMarkBlog(id)}>
            <FontAwesomeIcon icon={faBookmark} />
          </button>
          <ToastContainer />
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold my-2">{title}</h1>
      </div>

      <button
        className="text-indigo-600 font-semibold"
        onClick={() => bookMarkRead(id)}
      >
        <u>Mark as read</u>
      </button>
    </div>
  );
};

export default Blog;
