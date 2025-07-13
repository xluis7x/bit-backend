import { Router } from "express";
import studentsController from "../controllers/students.js";

const studentsRouter = Router();

studentsRouter.post("/", studentsController.create);
studentsRouter.get("/", studentsController.readAll);
studentsRouter.get("/:id", studentsController.readOne);
studentsRouter.put("/:id", studentsController.update);
studentsRouter.delete("/:id", studentsController.delete);

export default studentsRouter; 