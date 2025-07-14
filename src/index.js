import "dotenv/config";
import connectDB from "./config/db.js";
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import tasksRouter from "./routers/tasks.js";
import studentsRouter from "./routers/students.js";

const server = express();
const host = process.env.HOST;
const port = process.env.PORT;

connectDB();

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));
server.use("/students", studentsRouter);
server.use("/tasks", tasksRouter);

server.get("/", (req, res)=>{
  res.status(204).send();
})

server.listen(port, ()=>{
  console.log(`Server is running at port: ${port}`)
})




/*
const tasks = [{name: "Do math exercise", date: 7|0o7|2025, relevance: "Important"}]

server.post('/tasks', (req, res)=>{
  const newTask = {
    name:'',
    date:'',
    relevance:'',
  }
  tasks.push(newTask);
  res.status(201).json({ message: 'Your new task', task: newTask })
} )
*/