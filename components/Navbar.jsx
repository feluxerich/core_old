function Navbar() {
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

            <div className="flex flex-row right-6 absolute">
            </div>
        </nav>
    )
}

export default Navbar;