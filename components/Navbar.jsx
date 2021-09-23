function Navbar({ loggedIn }) {
    return (
        <nav className="bg-gray-800 h-14 flex flex-row items-center text-white p-6">
            <div className="flex flex-row">
                <p className="text-xl">core</p>
                <a href="/" className="ml-6">
                    <button className="bg-gray-900 px-3 py-1 rounded-md">Home</button>
                </a>
                <a href="/minecraft/hypixel" className="ml-3">
                    <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-md">
                        Hypixel
                    </button>
                </a>
                <a href="/10k/" className="ml-3">
                    <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-md">
                        Klasse 10k PreAlpha
                    </button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;