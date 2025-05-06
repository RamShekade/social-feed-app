import React, { useState } from 'react';

export default function PostForm({ addPost }) {
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !content) return;
    addPost(username, content);
    setUsername('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <textarea placeholder="What's on your mind?" value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Post</button>
    </form>
  );
}
