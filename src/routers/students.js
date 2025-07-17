import { Router } from "express";
import studentsController from "../controllers/students.js";

const studentsRouter = Router();

studentsRouter.post("/register", studentsController.createStudentUser);
studentsRouter.post("/login", studentsController.loginUser);
studentsRouter.get("/register", studentsController.readAllStudentUsers);
studentsRouter.get("/register/:id", studentsController.readOneStudentUser);
studentsRouter.put("/register/:id", studentsController.updateStudentUser);
studentsRouter.delete("/register/:id", studentsController.deleteStudentUser);

export default studentsRouter; 