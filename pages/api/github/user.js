import { baseUrl } from "@utils/functions"
import { Octokit } from "@octokit/core"
import { data } from "autoprefixer"

async function gitHubUser(req, res) {
    var user = await fetch(`${baseUrl(req)}/api/account/authenticate`, {
        headers: req.headers
    })
    if (user.status !== 200) {
        res.status(401).json()
        return
    }

    user = (await user.json()).user

    const octokit = new Octokit({ auth: user.github_token })

    // TODO: Handle if no github token is given

    data = await octokit.request("GET /user")

    // TODO: Fix if not 200 status code

    res.status(200).json({
        login: data.data.login,
        name: data.data.name,
        url: data.data.html_url,
        avatar: data.data.avatar_url,
        public_repos: data.data.public_repos,
        public_gists: data.data.public_gists,
        private_repos: data.data.total_private_repos,
        private_gists: data.data.private_gists,
        created_at: data.data.created_at
    })
}

export default gitHubUser