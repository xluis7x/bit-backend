import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    taskName: {
        type: String,
    },
    dueDate: {
        type: Date,
    },
    relevance: {
        type: String,
    },
    completed: {
        type: Boolean,
    }
}, {versionKey: false, timestamps: true})

export default model("task", taskSchema);