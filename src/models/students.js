import { Schema, model } from "mongoose";

const studentUserSchema = new Schema({
    studentName: {
        type: String,
    },
    studentUser: {
        type: String
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    studentImg: {
        type: String,
    },
    study: {
        type: String
    }
}, {versionKey: false, timestamps: true})

export default model("student", studentUserSchema);