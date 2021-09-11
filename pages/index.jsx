function HomePage() {
    return (
        <div className="w-full text-center mt-56">
            <a href="/api/github/oauth/authorize">
                <button className="bg-gray-800 p-5 rounded-lg">
                    Connect GitHub
                </button>
            </a>
        </div>
    )
}

export default HomePage;