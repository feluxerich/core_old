import { baseUrl } from "@utils/functions"
import User from "@models/user"

async function callback(req, res) {
    const params = `client_id=${process.env.GH_CLIENT_ID}&client_secret=${process.env.GH_CLIENT_SECRET}&code=${req.query.code}`
    var user = await fetch(`${baseUrl(req)}/api/account/authenticate`, {
        headers: req.headers
    })
    if (user.status !== 200) {
        res.redirect(307, `${baseUrl(req)}/account/login`)
        return
    }
    user = (await user.json()).user
    var resp = await (await fetch(`https://github.com/login/oauth/access_token?${params}`, {
        method: "POST",
        headers: {
            Accept: "application/json"
        }
    })).json()
    var updated = await User.findOneAndUpdate({ username: user.username }, { github_token: resp.access_token })
    res.redirect(308, `${baseUrl(req)}/`)
}

export default callback
