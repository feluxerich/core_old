import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password_hash: String,
    github_token: String,
    admin: Boolean,
})

export default mongoose.model('User', userSchema);