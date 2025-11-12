import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Comments from "./Comments";
import Content from "./Content";

function Blogpost() {
    const { id } = useParams ();
    const [ postcontent, setContent ] = useState ({
        title: '',
        content: '',
        author: '',
        date: '',
        user: {
            name: '',
            email: ''
        }
    });

    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
          .then((userResponse) => userResponse.json())
          .then((userData) => {
            setContent({
              title: data.title,
              content: data.body,
              author: `User ${data.userId}`,
              date: new Date().toISOString().split("T")[0],
              user: {
                name: userData.name,
                email: userData.email,
              },
            });
          })
          .catch((error) => console.error("Error fetching user:", error));
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, 
  [id]);

    return <div>
        <Content title={postcontent.title} content={postcontent.content} author={postcontent.author} date={postcontent.date} userName={postcontent.user.name} userEmail={postcontent.user.email} />
            <div>
                <p> Name: {postcontent.user.name}</p>
                <p> Email: {postcontent.user.email}</p>
            </div>
        <Comments />
    </div>;
}

export default Blogpost;