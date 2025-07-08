# bit-backend
## 📚 StudyFlow API – Backend

Welcome to the **StudyFlow** backend!  
This is a RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage student productivity — helping users keep track of tasks, exams, and academic goals in one simple system.

---

## 🎯 Project Purpose

**StudyFlow** was created to solve a common student problem: lack of organization. The app allows users to create, update, and manage academic tasks, exams, and study events — boosting productivity and clarity.

---

## 🧠 Features

- ✅ Full **CRUD** for:
  - 📌 Tasks
  - 🧪 Exams
  - 📅 Study Events
- ✅ MongoDB for storing data
- ✅ Express routes and controllers
- ✅ Input validation and error handling
- ✅ Modular structure for scalability

---

## 📁 Project Structure

/bit-backend
│
├── controllers/    # Task, Exam, Event logic
├── models/         # Mongoose schemas
├── routes/         # API routes
├── middleware/     # Error and validation middleware
├── config/         # MongoDB connection
├── app.js          # Express setup
└── server.js       # Entry point

## 📚 API Endpoints

| Method | Route                           | Description   |
| ------ | --------------------------------| ------------- |
| GET    | http://localhost:4000           | Root          |
| POST   | http://localhost:4000/tasks     | Create a task |
| GET    | http://localhost:4000/tasks     | Get all tasks |
| GET    | http://localhost:4000/tasks/:id | Get one task  |
| PUT    | http://localhost:4000/tasks/:id | Update a task |
| DELETE | http://localhost:4000/tasks/:id | Delete a task |


## 🌱 Future Features

📆 Calendar integration

🛎️ Notifications & reminders

🎯 Goal tracking

🧑‍🎓 User accounts & authentication

--- 

# 👤 Author
Created by Luis Bejarano. 
Check out more: [My Github](https://github.com/xluis7x).



