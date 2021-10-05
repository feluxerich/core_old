import { baseUrl } from "@utils/functions"
import { Octokit } from "@octokit/core"
import { data } from "autoprefixer"

async function githubRepos(req, res) {
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

    data = await octokit.request("GET /user/repos")

    // TODO: Fix if not 200 status code

    var repos = []

    data.data.forEach(element => {
        repos.push({
            name: element.name,
            full_name: element.full_name,
            private: element.private,
            url: element.html_url,
            description: element.description,
            owner: {
                login: element.owner.login,
                avatar: element.owner.avatar_url,
                url: element.owner.html_url
            }
        })
    });



    res.status(200).json(repos)
}

export default githubRepos