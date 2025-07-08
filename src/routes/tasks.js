import { Router } from "express";
import tasksController from "../controllers/tasks.js";
const tasksRouter = Router();

tasksRouter.post("/", tasksController.create);
tasksRouter.get("/", tasksController.readAll);
tasksRouter.get("/:id", tasksController.readOne);
tasksRouter.put("/:id", tasksController.update);
tasksRouter.delete("/:id", tasksController.delete);

export default tasksRouter; 