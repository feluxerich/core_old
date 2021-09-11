import { redirect } from "next/dist/server/api-utils";

async function handler(_req, res) {
    return redirect(res, 302, `https://github.com/login/oauth/authorize?client_id=${process.env.GH_CLIENT_ID}`)
}

export default handler;