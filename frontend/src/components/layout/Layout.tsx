import { Outlet } from "react-router-dom";
import Taskbar from "./Taskbar";

export default function Layout() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-x-hidden">
            <Taskbar />
            <main className="max-w-3xl mx-auto px-6 py-24 space-y-40">
                <Outlet />
            </main>
        </div>
    );
}
