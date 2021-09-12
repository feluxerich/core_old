import { useRouter } from "next/dist/client/router";

function Callback() {
    const router = useRouter();

    const makeRequest = async () => {
        var resp = await (await fetch(`/api/github/oauth/access_token?code=${router.query.code}`)).json()
        //sessionStorage.setItem("gh-token", resp.resp.access_token)
        var user = await (await fetch("/api/account/authenticate", {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("jwt")}`
            }
        })).json()

        console.log(user);

        if (user.status !== 200) {
            router.push("/account/login")
        } else {
            await fetch("/api/github/oauth/connect", {
                method: "POST",
                body: JSON.stringify({
                    username: user.user.username,
                    token: resp.resp.access_token
                })
            })
        }
    }
    makeRequest()

    return (
        <span>Test</span>
    )
}

export default Callback;