import { checkToken } from "@utils/functions";

async function authenticate(req, res) {
    var user = await checkToken((req.headers.authorization).split(' ')[1])
    if (user === false) {
        res.status(401).json({
            message: "Not authorized"
        })
    }
    res.status(200).json({ user })
}

export default authenticate