export default function Download() {
    return (
        <section id="download" className="min-h-[80vh] flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6 text-blue-400">Download TaskBar</h2>
            <p className="text-gray-300 mb-8">
                Get the latest version of TaskBar for your platform. Builds are automatically updated with each production push from GitHub.
            </p>

            <div className="flex flex-col gap-4">
                <a
                    href="https://taskbar.simondevlabs.dev/downloads/latest.zip"
                    className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl text-white text-center font-semibold"
                >
                    🪟 Download for Windows
                </a>
                <a
                    href="https://github.com/SimonRonse/TaskBarv4/releases/latest/download/TaskBar.dmg"
                    className="bg-gray-700 hover:bg-gray-800 px-5 py-3 rounded-xl text-white text-center font-semibold"
                >
                    🍎 Download for macOS
                </a>
            </div>

            <p className="mt-8 text-sm text-gray-500">
                Looking for older builds? Visit{" "}
                <a
                    href="https://yourdomain.com/downloads/latest.zip"
                    className="text-blue-400 hover:underline"
                >
                    GitHub Releases
                </a>
                .
            </p>
        </section>
    );
}
