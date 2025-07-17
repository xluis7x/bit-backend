import bcrypt from "bcryptjs";
import StudentModel from "../models/students.js";
import { getToken } from "../helpers/token.js";

const studentsController = {
    createStudentUser: async (req, res) => {
        try {
            const { studentName, studentUser, email, password, studentImg, study } = req.body;

            const encryptedPassword = await bcrypt.hash(password, 10);
            const newUser = new StudentModel({
                studentName,
                studentUser,
                email,
                password: encryptedPassword,
                studentImg,
                study
            });

            const studentCreated = await newUser.save();
            console.log("student created:", studentCreated);

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
    readAllStudentUsers: async (req, res) => {
        try {
            const users = await StudentModel.find()
            res.status(200).json({
                allOK: true,
                message: "Perfect! All student users retrieved successfully",
                data: users,
            });
        } catch (error) {
            res.status(500).json({
                allOK: false,
                message: "Error, unable to retrieve students users",
                data: error.message
            });
        }
    },
    readOneStudentUser: async (req, res) => {
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
    updateStudentUser: async (req, res) => {
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
    deleteStudentUser: async (req, res) => {
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
    loginUser: async (req, res) => {
        try {
            const { username, password } = req.body;
            const userFound = await StudentModel.findOne({ email: username });
            if (!userFound) {
                res.status(401).json({
                    allOK: false,
                    message: "Unauthorized user",
                    data: null
                });
            } else {
                const validPassword = bcrypt.compare(password, userFound.password);
                if (validPassword) {
                    const token = await getToken({
                        id: userFound._id,
                        name: userFound.name
                    })
                    res.status(200).json({
                        allOK: true,
                        message: "User found successfully - Welcome!",
                        data: token
                    });
                } else {
                    res.status(401).json({
                        allOK: false,
                        message: "Unauthorized user",
                        data: null
                    });
                }
            }
        } catch (error) {
            res.status(500).json({
                allOK: false,
                message: "Cannot create a new student user",
                data: error.message
            });
        }
    },
    /*
    readAllUsers: async (req, res) => {
        try {
            const allUsers = await StudentModel.find()
            res.status(200).json({
                allOK: true,
                message: "Perfect! All users retrieved successfully",
                data: allUsers,
            });
        } catch (error) {
            res.status(500).json({
                allOK: false,
                message: "Error, unable to retrieve users",
                data: error.message
            });
        }
    },
    readOneUser: async (req, res) => {
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
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { studentUser, email, password } = req.body;
            const userUpdated = await StudentModel.findByIdAndUpdate(id, {
                studentUser,
                email,
                password,
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
    deleteUser: async (req, res) => {
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
    },*/
}
export default studentsController;