import { useRouter } from "next/dist/client/router";

function Callback() {
    const {query} = useRouter();

    const makeRequest = async () => {
        var resp = await (await fetch(`/api/github/oauth/access_token?code=${query.code}`)).json()
        console.log(resp.resp.access_token)
    }
    makeRequest()

    return (
        <span>Test</span>
    )
}

export default Callback;