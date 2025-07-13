import student from "../models/students.js";
import StudentModel from "../models/students.js"

const studentsController = {
    create: async (req, res) => {
        try {
            const { studentName, studentUser, email, password, studentImg } = req.body;
            const newUser = new StudentModel({
                studentName,
                studentUser,
                email,
                password,
                studentImg
            });
            const studentCreated = await newUser.save();
            res.status(201).json({
                allOK: true,
                message: "Student user created successfully",
                data: studentCreated
            });
        } catch (error) {
            res.status(500).json({
                allOK: false,
                message: "Cannot create a new student user",
                data: error.message
            });
        }
    },
    readAll: async (req, res) => {
        try {
            const Users = await StudentModel.find()
            res.status(200).json({
                allOK: true,
                message: "Perfect! All student users retrieved successfully",
                data: Users,
            });
        } catch (error) {
            res.status(500).json({
                allOK: false,
                message: "Error, unable to retrieve students users",
                data: error.message
            });
        }
    },
    readOne: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await StudentModel.findById(id);
            if (!user) {
                res.status(404).json({
                    allOK: false,
                    message: `Student user with ID ${id} not found`,
                    data: null
                });
            }
            res.status(200).json({
                allOK: true,
                message: `Student user with ID ${id} found successfully`,
                data: user
            });
        } catch (error) {
            res.status(500).json({
                allOK: false,
                message: "Error, unable to retrieve student user",
                data: error.message
            });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { studentName, studentUser, email, password, studentImg } = req.body;
            const userUpdated = await StudentModel.findByIdAndUpdate(id, {
                studentName,
                studentUser,
                email,
                password,
                studentImg
            });
            if (!userUpdated) {
                res.status(404).json({
                    allOK: false,
                    message: `Student user with ID ${id} not found`,
                    data: null
                });
            }
            res.status(200).json({
                allOK: true,
                message: `Student user with ID ${id} updated successfully`,
                data: userUpdated
            });
        } catch (error) {
            res.status(500).json({
                allOK: false,
                message: "Cannot update student user",
                data: error.message
            });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const userDeleted = await StudentModel.findByIdAndDelete(id);
            if (!userDeleted) {
                res.status(404).json({
                    allOK: false,
                    message: `Student user with ID ${id} not found`,
                    data: error.message
                });
            }
            res.status(200).json({
                allOK: true,
                message: `Student user with ID ${id} deleted successfully`,
                data: null
            });
        } catch (error) {
            res.status(500).json({
                allOK: false,
                message: "Cannot delete user",
                data: error.message
            });
        }
    },
}
export default studentsController;