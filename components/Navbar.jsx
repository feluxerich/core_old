import { useContext, useState } from "react";

function Navbar() {
    // const [loggedIn, setLoggedIn] = useState(false)

    // const authenticate = async () => {
    //     var resp = await fetch("/api/authenticate", {
    //         headers: {
    //             Authorization: sessionStorage.getItem("jwt")
    //         }
    //     })

    //     if (resp.status === 200) {
    //         setLoggedIn(true)
    //     } else {
    //         setLoggedIn(false)
    //     }
    // }

    // authenticate()

    // const logout = async () => {
    //     useContext
    // }

    return (
        <nav className="bg-gray-800 h-14 flex flex-row items-center text-white p-6">
            <div className="flex flex-row left-6 absolute">
                <p className="text-xl">core</p>
                <a href="/" className="ml-6">
                    <button className="bg-gray-900 px-3 py-1 rounded-md">Home</button>
                </a>
                <a href="/minecraft/hypixel" className="ml-3">
                    <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-md">
                        Hypixel
                    </button>
                </a>
            </div>

            {/* <div className="flex flex-row right-6 absolute">
                {
                    loggedIn ? (
                            <a href="/account/logout" className="ml-3">
                                <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-md">
                                    Logout
                                </button>
                            </a>
                        ) : (
                                <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-md ml-3">
                                    Login
                                </button>
                        )
                        
                }
            </div> */}
        </nav>
    )
}

export default Navbar;