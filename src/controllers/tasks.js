import task from "../models/task.js";
import TaskModel from "../models/task.js"

const tasksController = {
    create: async (req, res) => {
        try {
            const { taskName, dueDate, relevance, completed } = req.body;
            const newTask = new TaskModel({
                taskName,
                dueDate,
                relevance,
                completed
            });
            const taskCreated = await newTask.save();
            res.status(201).json({
                allOK: true,
                message: "Task created successfully",
                data: taskCreated
            });
        } catch (error) {
            res.status(500).json({
                allOK: false,
                message: "Cannot create a new Task",
                data: error.message
            });
        }
    },
    readAll: async (req, res) => {
        try {
            const tasks = await TaskModel.find()
            res.status(200).json({
                allOK: true,
                message: "Perfect! All tasks retrieved successfully",
                data: tasks,
            });
        } catch (error) {
            res.status(500).json({
                allOK: false,
                message: "Error, unable to retrieve tasks",
                data: error.message
            });
        }
    },
    readOne: async (req, res) => {
        try {
            const { id } = req.params;
            const task = await TaskModel.findById(id);
            if (!task) {
                res.status(404).json({
                    allOK: false,
                    message: `Task with ID ${id} not found`,
                    data: null
                });
            }
            res.status(200).json({
                allOK: true,
                message: `Task with ID ${id} found successfully`,
                data: task
            });
        } catch (error) {
            res.status(500).json({
                allOK: false,
                message: "Error, unable to retrieve task",
                data: error.message
            });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { taskName, dueDate, relevance, completed } = req.body;
            const taskUpdated = await TaskModel.findByIdAndUpdate(id, {
                taskName,
                dueDate,
                relevance,
                completed
            });
            if (!taskUpdated) {
                res.status(404).json({
                    allOK: false,
                    message: `Task with ID ${id} not found`,
                    data: null
                });
            }
            res.status(200).json({
                allOK: true,
                message: `Task with ID ${id} updated successfully`,
                data: taskUpdated
            });
        } catch (error) {
            res.status(500).json({
                allOK: false,
                message: "Cannot update task",
                data: error.message
            });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const taskDeleted = await TaskModel.findByIdAndDelete(id);
            if (!taskDeleted) {
                res.status(404).json({
                    allOK: false,
                    message: `Task with ID ${id} not found`,
                    data: error.message
                });
            }
            res.status(200).json({
                allOK: true,
                message: `Task with ID ${id} deleted successfully`,
                data: null
            });
        } catch (error) {
            res.status(500).json({
                allOK: false,
                message: "Cannot delete task",
                data: error.message
            });
        }
    },
}

export default tasksController;