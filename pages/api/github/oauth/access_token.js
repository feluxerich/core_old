async function handler(req, res) {
    var code = req.query.code

    var resp = await (await fetch(`https://github.com/login/oauth/access_token?code=${code}&client_id=${process.env.GH_CLIENT_ID}&client_secret=${process.env.GH_CLIENT_SECRET}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json'
        }
    })).json()
    res.status(200).json({ resp })
}

export default handler;