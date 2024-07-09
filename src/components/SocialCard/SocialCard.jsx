import React, { useEffect, useState } from 'react';
import CSS from './SocialCard.module.css';

const SocialCard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function socialPosts() {
      const url = "https://academics.newtonschool.co/api/v1/quora/post";
      const myHeaders = new Headers();
      myHeaders.append("projectID", "8nbih316dv01");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("Fetched data:", result);
        if (result && Array.isArray(result.data)) {
          setData(result.data);
        } else {
          throw new Error("Data format is incorrect");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    }

    socialPosts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className={CSS.socialPageContainer}>
          <div className={CSS.parentContainer}>
            <div className={CSS.headingContainer}>
              <img
                src={item.author?.profileImage || "https://tse2.mm.bing.net/th?id=OIP.GH6rWOvd0AlyyOlhFEPV6AHaHa&pid=Api&P=0&h=180"}
                alt={item.author?.name || "Unknown author"}
                className={CSS.image}
              />
              <div className={CSS.headerContant}>
                <h4>{item.title || "Title not available"}</h4>
                <p>By: {item.author?.name || "Unknown author"}</p>
              </div>
            </div>

            <div className={CSS.message}>
              <p className={CSS.messageContant}>{item.content || "Content not available"}</p>
            </div>

            <div className={CSS.footerContainer}>
              <img
                src={item.images?.[0] || "https://tse2.mm.bing.net/th?id=OIP.GH6rWOvd0AlyyOlhFEPV6AHaHa&pid=Api&P=0&h=180"}
                alt="Content Image"
                className={CSS.image}
              />
              <div className={CSS.reaction}>
                <p>Likes: {item.likeCount || 0}</p>
                <p>Comments: {item.commentCount || 0}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SocialCard;
