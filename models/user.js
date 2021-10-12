import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password_hash: String,
    github_token: String,
    chor: Boolean,
})

export default mongoose.models.User || mongoose.model('User', userSchema);