import { checkToken } from "@utils/functions";
import cookie from "cookie"

async function authenticate(req, res) {
    var user = await checkToken(req.cookies.jwt)
    if (user === false) {
        res.status(401).json({
            message: "Not authorized"
        })
        return
    }
    res.status(200).json({ user })
}

export default authenticate