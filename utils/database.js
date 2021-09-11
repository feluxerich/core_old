import mongoose from "mongoose";

export async function connect() {
    await mongoose.connect(process.env.MONGODB_URL, {
        dbName: "projects"
    });
}