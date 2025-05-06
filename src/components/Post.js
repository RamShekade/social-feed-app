import React from 'react';

export default function Post({ post, toggleLike }) {
  return (
    <div className="post">
      <h3>@{post.username}</h3>
      <p>{post.content}</p>
      <small>{post.timestamp}</small>
      <div>
        <button onClick={() => toggleLike(post.id)}>
          {post.liked ? '💔 Unlike' : '❤️ Like'} ({post.likes})
        </button>
      </div>
    </div>
  );
}
