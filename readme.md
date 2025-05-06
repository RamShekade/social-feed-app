
# 🌐 Social Feed Web App

A responsive and interactive social feed application built with **React.js**. Users can view posts, like/unlike them, add new ones, and filter posts by username. Designed with clean UI and optional dark/light mode support.

---

## 🚀 Features

- ✅ Display feed of posts (username, content, timestamp)
- ✅ Add a new post to the top of the feed
- ✅ Like/unlike individual posts with count
- ✅ Filter posts by username
- ✅ Responsive and styled UI
- ✅ Dark/Light theme toggle 🌙☀️
- ✅ Posts persist using `localStorage`

---

## 📸 Demo

> ![Home Feed](https://github.com/RamShekade/social-feed-app/blob/main/screenshots/output.png?raw=true)


---

## 🛠️ Tech Stack

- React.js (Create React App)
- CSS (Flexbox/Grid)
- localStorage (for persistence)
- Optional: Redux (if implemented)

---

## 📦 Getting Started

### 1. Clone the Repository

git clone https://github.com/RamShekade/social-feed-app.git
cd social-feed-app
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start the Development Server
bash
Copy
Edit
npm start
Visit http://localhost:3000 in your browser.

🧩 Folder Structure
pgsql
Copy
Edit
social-feed-app/
│
├── public/
├── src/
│   ├── components/
│   │   └── Post.js
│   │   └── PostForm.js
│   │   └── Filter.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
├── package.json
├── README.md
🌙 Optional Enhancements
localStorage Persistence – Posts are saved and reloaded on page refresh.

Dark Mode – Easily switch between light/dark themes using a toggle.

API Integration – You can replace dummy data with an API like:

https://jsonplaceholder.typicode.com/posts

💡 Future Improvements
Add image support to posts

Add comments to posts

Authentication and user profiles

Real backend integration (Node/Express + MongoDB)
