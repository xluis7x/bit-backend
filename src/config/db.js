import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS_URI)
        console.log("MongoDB Atlas connected successfully");
    } catch (error) {
        console.log("Connection failed | ", error);
    }
}

export default connectDB;  


//xluis58x
//T7AuZIe6R7CXa7iB