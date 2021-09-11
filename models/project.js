import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    completed: Boolean,
    repo_url: String,
    owner: String
})

export default mongoose.model('Project', projectSchema);