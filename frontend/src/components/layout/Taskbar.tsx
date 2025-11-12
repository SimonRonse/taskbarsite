import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { taskbarConfig } from "../../config/taskbarConfig";
import TaskbarTile from "./TaskbarTile";

export default function Taskbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    // Handle scrolling after navigating home
    useEffect(() => {
        if (currentPath === "/" && window.location.hash) {
            const target = window.location.hash.replace("#", "");
            document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
        }
    }, [currentPath]);

    const handleSelect = (target: string) => {
        if (target.startsWith("/#")) {
            const id = target.replace("/#", "");
            if (currentPath !== "/") {
                navigate(`/#${id}`);
                setTimeout(() => {
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }, 300);
            } else {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            navigate(target);
        }
    };

    return (
        <aside className="fixed top-0 right-0 h-full w-72 bg-black/60 backdrop-blur-2xl border-l border-white/10 p-4 flex flex-col overflow-y-auto z-50">
            {taskbarConfig.map((section) => (
                <div key={section.title} className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-sm font-medium text-gray-300">{section.title}</h2>
                        {section.description && (
                            <p className="text-xs text-gray-500">{section.description}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        {section.tiles.map((tile) => (
                            <TaskbarTile
                                key={tile.id}
                                id={tile.id}
                                title={tile.title}
                                subtitle={tile.subtitle}
                                emoji={tile.emoji}
                                route={tile.route}
                                actions={tile.actions}
                                isActive={currentPath === tile.route}
                                onSelect={handleSelect}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </aside>
    );
}
