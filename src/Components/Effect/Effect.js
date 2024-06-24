import React, { useEffect, useState } from "react";

const Effect = () => {
  const tab = ["posts", "comments", "albums"];
  const [type, setType] = useState("posts");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);
  console.log(type, posts);
  return (
    <div>
      {tab.map((item, index) => (
        <button onClick={() => setType(item)} key={item}>
          {item}
        </button>
      ))}

      <br />
      {posts &&
        posts.length > 0 &&
        posts
          .slice(0, 15)
          .map((item, index) => <p key={index}>{item.title || item.name}</p>)}
    </div>
  );
};

export default Effect;
