import { connect } from "./database";
import User from "@models/user";
import jwt from "jsonwebtoken"

export async function checkToken(token) {
    if (token == undefined) {
        return false
    }
    await connect()

    var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    var user = await User.find({ username: decoded.username })
    if (user.length == 0 || decoded.password_hash !== user[0].password_hash) {
        return false
    }
    return user
}

export const baseUrl = (req) => {
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    return req ? `${protocol}://${req.headers.host}` : ''
}