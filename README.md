# RollBase_access_control_blog_project

# RBAC Blog Platform

A full-stack blog application with **Role-Based Access Control (RBAC)** using **Node.js**, **Express**, **MongoDB**, and **React**.



## 📦 Tech Stack
- **Frontend:** React, Axios, React Router
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT
- **Authorization:** Role-based (admin/user)

---

## ⚙️ Features

### 🧑‍💻 Users
- Signup/Login
- View all blog posts

### 👨‍💼 Admins
- Create, update, and delete blog posts
- Access Admin Dashboard

---

## 🚀 How to Run Locally

### Backend Setup


```bash
cd backend
npm install
# If you don't have MongoDb please install it before running this backend
# Update .env with your Mongo URI & JWT secret
npm run dev

```
### Frontend Setup

```bash
cd frontend
npm install
npm start



