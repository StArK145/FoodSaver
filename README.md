These is Our Project FoodSaver
# 🍽️ FoodSaver – Save Food, Serve Humanity

**FoodSaver** is a full-stack AI-powered food donation platform that bridges the gap between surplus and scarcity. It enables individuals, restaurants, and organizations to donate excess food, while allowing needy users to view, reserve, and collect it—making sure no meal goes to waste.



---

## 🌟 Highlights

- 🔐 **Secure Authentication** with Firebase
- 📍 **Location-based food listings**
- 📦 **Real-time food donation & reservation**
- 📊 **Admin dashboard for monitoring donations**
- 🌙 **Responsive UI with dark mode**
- 📈 **Future-ready with AI health checks and analytics**

---

## 💡 Why FoodSaver?

Every day, **tons of edible food** are wasted, while millions go to bed hungry. FoodSaver aims to solve this by:

> “Creating a decentralized, trusted, and user-friendly platform to **donate**, **track**, and **receive** food—**anytime, anywhere**.”

---

## 🛠️ Tech Stack

| Frontend     | Backend       | Database | Auth     | Hosting       |
|--------------|---------------|----------|----------|----------------|
| React (Vite) | Node.js, Express | MongoDB  | Firebase | Vercel & Render |

- Tailwind CSS for sleek responsive UI
- Firebase Admin SDK for backend token validation
- Chart.js for dashboard visualizations

---

## 🧩 Folder Structure

FoodSaver/ ├── client/ # React + Tailwind frontend │ ├── components/ # Reusable UI parts │ ├── pages/ # Main screens │ ├── services/ # API & Firebase configs │ └── ... ├── server/ # Express backend │ ├── routes/ # auth, food, reservation │ ├── models/ # MongoDB schemas │ ├── controllers/ # Route logic │ └── ... └── README.md

---

## 🔐 Authentication & Roles

- Firebase Auth handles **email/password** registration & login.
- Role-based access for:
  - Donors
  - Receivers
  - Admins

---

## 🌐 Core Features

### 👤 User Features
- Register/Login securely with Firebase
- Donate food with quantity, location, and expiry info
- Reserve available food nearby
- View your donation/reservation history

### 🛠️ Admin Features
- View food stats with charts
- Manage users and food listings
- Detect expired or over-reserved food

---

## ⚙️ Getting Started

### 1. Clone Repo

```bash
git clone https://github.com/yourname/foodsaver.git
cd foodsaver