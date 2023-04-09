import React from "react";

const Bookmark = (props) => {
  return (
    <div className="py-4 px-2 bg-white rounded-md mt-4">
      <h3 className="w-60 h-auto font-bold">{props.bookMark}</h3>
    </div>
  );
};

export default Bookmark;
