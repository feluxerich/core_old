import User from "@models/user";
import { connect } from "@utils/database"
import { hash } from "bcrypt";

async function signup(req, res) {
    req = JSON.parse(req.body)
    await connect();

    if (!(req.username && req.password)) {
        res.status(400).json({
            message: "Username and Password parameter required"
        })
        return
    }

    if (await User.findOne({ username: req.username })) {
        res.status(302).json({
            message: "User already exists"
        })
        return
    }

    await User.create({
        username: req.username,
        password_hash: await hash(req.password, 12)
    })

    res.status(201).json({
        message: "User created"
    })
}

export default signup