import { useState } from "react"

function RunCode() {
    const [source, setSource] = useState("")
    const [language, setLanguage] = useState("")
    const [output, setOutput] = useState("")

    const makeRequest = async () => {
        const resp = await fetch("https://emkc.org/api/v1/piston/execute", {
            method: "POST",
            body: JSON.stringify({
                language, 
                source
            })
        })
        setOutput(await resp.json())
    }
    return (
        <div className="flex flex-col items-center mt-40">
            <label>
                <input type="text" placeholder="Language" value={language} onChange={(e) => setLanguage(e.currentTarget.value)} className="bg-gray-900 border-2 border-gray-800 p-3" />
            </label>
            <textarea value={source} onChange={(e) => setSource(e.currentTarget.value)} className="resize-none bg-gray-900 border-2 border-gray-800 p-3" />
            <button type="submit" className="border-2 border-white p-3 rounded-md" onClick={makeRequest}>Run</button>

            <span>
                {output?.stdout}
            </span>
        </div>
    )
}

export default RunCode