import User from "@models/user";
import { connect } from "@utils/database"
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

async function login(req, res) {
    req = JSON.parse(req.body)
    await connect();

    if (!(req.username && req.password)) {
        res.status(400).json({
            message: "Username and Password parameter required"
        })
        return
    }

    var user = await User.findOne({ username: req.username })

    if (!user) {
        res.status(404).json({
            message: "No User found"
        })
        return
    }

    if (!await compare(req.password, user.password_hash)) {
        res.status(403).json({
            message: "Password incorrect"
        })
    }

    const token = sign({
        username: user.username,
        password_hash: user.password_hash,
    }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })

    res.status(200).json({
        token
    })
}

export default login