import React from "react";

function Post({ post }) {
  
  // Post
    return (
        <div class="blog-post">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.timestamp}</p>
         </div>
    );
}

export default Post;