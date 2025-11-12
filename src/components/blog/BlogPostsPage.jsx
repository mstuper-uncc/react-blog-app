import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const BlogPostsPage = () => {
  const [ myposts, setPosts ] = useState({}); 
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  },
[]);

    return (
    <div class="blog-posts">
      <h1 class="blog-list">Blog Posts</h1>
      <ul class="blog-list">
        {Array.isArray(myposts) && myposts.map(post => (
          <li key={post.id} class="individblog">
            <Link to={`/posts/${post.id}`} className="bloglink">
              <h2 class="individblog-title ">{post.title}</h2>
            </Link>
            <p class="blog-postspara">{post.body.substring(0, 100)}</p>
            <p class="blogdate">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostsPage;
