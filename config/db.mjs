import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected successfully!")
    } catch (error) {
        console.error("Error connecting MongoDB", error.message)
    }
};

export default connectDB;