---
# 🎬 YouTube Clone (Next.js Practice Project)

A simple YouTube Clone built with **Next.js (App Router)** and **Tailwind CSS** for learning and practicing modern frontend development.

This project is still in development and will be updated with new features over time.
```
---

## 🎯 Purpose

This project is created for learning and improving skills in:

- React component design
- Next.js App Router
- Dynamic routing with `[id]` pages
- Tailwind CSS styling
- Data-driven UI development
- Frontend architecture basics
- Working with mock APIs

---

## ⚙️ Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Mock JSON API (local data)
- next/image
- react-hover-video-player
- lucide-react icons
- Video.js (via @videojs/react) 🎬

---

## 📦 Features

- 🎥 Video list page (Home)
- 🧩 Reusable VideoCard component
- 🖼️ Optimized images with Next.js Image
- 🎬 Hover video preview on thumbnails
- 📊 Mock API using JSON data
- 📱 Responsive grid layout (basic)
- 🧭 Sidebar (in progress)

### ▶️ Watch Page Features

- Dynamic route: `/watch/[id]`
- Fetch video data from mock API (`/api/videos/[id]`)
- Video playback using **Video.js player**
- Display full video details (title, channel, views, description, likes/dislikes)
- Server-side data fetching with App Router

---

## 🚧 Missing / In Progress Features

- 🔍 Search functionality
- 💬 Comments section
- 👍 Like / dislike system (interactive)
- 🔐 Authentication
- 🗄️ Real backend / database integration
- 📱 Fully responsive UI improvements
- ⏭️ Next/related video suggestions

---

## 📁 Project Structure

```

src
├── app
│   ├── api
│   │   └── videos
│   │       ├── [id]
│   │       │   └── route.js
│   │       └── route.js
│   ├── layout.jsx
│   ├── (main)
│   │   ├── layout.jsx
│   │   └── page.jsx
│   └── watch
│       └── [id]
│           └── page.jsx
├── assets
│   └── styles
│       └── global.css
├── components
│   ├── Header.jsx
│   ├── player.tsx
│   ├── Sidebar.jsx
│   ├── Skeleton.jsx
│   ├── VideoCard.jsx
│   └── VideoWatch.jsx
├── data
│   └── videos.json
└── styles
    └── global.css


```

---

## 🚀 Getting Started

Clone the project:

```bash
git clone <repo-url>
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🧠 Notes

This project is not production-ready.
It is purely for learning and experimenting with frontend development concepts.

Key learning focus areas include:

- Dynamic routing in Next.js (`[id]`)
- Server vs Client Components
- Mock API design
- Video player integration (Video.js)
- Component-based architecture

More features will be added over time as I continue learning.

---
