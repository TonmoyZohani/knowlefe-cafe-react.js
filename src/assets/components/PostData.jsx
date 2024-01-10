import React, { useState } from "react";
import axios from "axios";

function PostData() {
  const [formInfo, setFormInfo] = useState({
    name: "Tonmoy",
    id: 12,
  });

  const handleInfo = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  //   const handleInputChange = (e) => {
  //     setPostData({
  //       ...postData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const response = await axios.post(
  //         "https://jsonplaceholder.typicode.com/posts",
  //         formInfo
  //       );
  //       console.log("Post request successful:", response.data);
  //     } catch (error) {
  //       console.error("Error making POST request:", error);
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Post request successful:", data);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formInfo.title}
          onChange={handleInfo}
        />
      </label>
      <br />
      <label>
        Body:
        <textarea name="body" value={formInfo.body} onChange={handleInfo} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostData;
