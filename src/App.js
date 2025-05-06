import React, { useState, useEffect } from 'react';
import Post from './components/Post';
import PostForm from './components/PostForm';
import Filter from './components/Filter';
import './App.css';

const getInitialPosts = () => {
  const savedPosts = localStorage.getItem('posts');
  if (savedPosts) return JSON.parse(savedPosts);
  return [
    { id: 1, username: "Alice", content: "Hello world!", timestamp: new Date().toLocaleString(), likes: 0, liked: false },
    { id: 2, username: "Bob", content: "React is great!", timestamp: new Date().toLocaleString(), likes: 2, liked: false },
  ];
};

export default function App() {
  const [posts, setPosts] = useState(getInitialPosts);
  const [filter, setFilter] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (username, content) => {
    const newPost = {
      id: Date.now(),
      username,
      content,
      timestamp: new Date().toLocaleString(),
      likes: 0,
      liked: false
    };
    setPosts([newPost, ...posts]);
  };

  const toggleLike = (id) => {
    const updated = posts.map(post =>
      post.id === id ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post
    );
    setPosts(updated);
  };

  const filteredPosts = posts.filter(post =>
    post.username.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <h1>Social Feed</h1>
      <button onClick={() => setDarkMode(!darkMode)} className="theme-btn">
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
      <PostForm addPost={addPost} />
      <Filter setFilter={setFilter} />
      <div className="feed">
        {filteredPosts.map(post => (
          <Post key={post.id} post={post} toggleLike={toggleLike} />
        ))}
      </div>
    </div>
  );
}
