import { useState } from "react";

interface TaskbarTileProps {
    id: string;
    title: string;
    subtitle?: string;
    emoji?: string;
    route?: string;
    actions?: {
        items: { id: string; label: string; target: string }[];
    };
    isActive: boolean;
    onSelect: (target: string) => void;
}

export default function TaskbarTile({
                                        title,
                                        subtitle,
                                        emoji,
                                        route,
                                        actions,
                                        isActive,
                                        onSelect,
                                    }: TaskbarTileProps) {
    const [index, setIndex] = useState(0);
    const hasActions = !!actions?.items?.length;

    const cycleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!actions) return;
        const next = (index + 1) % actions.items.length;
        setIndex(next);
    };

    const cyclePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!actions) return;
        const prev = (index - 1 + actions.items.length) % actions.items.length;
        setIndex(prev);
    };

    const currentAction = hasActions ? actions.items[index] : null;

    return (
        <button
            onClick={() =>
                hasActions
                    ? onSelect(currentAction!.target)
                    : route && onSelect(route)
            }
            className={`w-full text-left rounded-2xl px-4 py-3 flex items-center justify-between border border-white/10 transition-all ${
                isActive ? "bg-white/15" : "bg-white/5 hover:bg-white/10"
            }`}
        >
            {/* Left content: emoji + text */}
            <div className="flex items-center gap-3 overflow-hidden">
                <div className="text-xl flex-shrink-0">{emoji ?? "🧩"}</div>

                <div className="flex flex-col flex-grow overflow-hidden">
                    <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-white truncate">
              {title}
            </span>
                        {hasActions && (
                            <span className="text-xs text-gray-400 ml-2 flex-shrink-0">
                ({index + 1}/{actions!.items.length})
              </span>
                        )}
                    </div>
                    {subtitle && (
                        <span className="text-xs text-gray-400 truncate">{subtitle}</span>
                    )}
                    {currentAction && (
                        <span className="text-xs text-blue-400 mt-1 truncate">
              {currentAction.label}
            </span>
                    )}
                </div>
            </div>

            {/* Right side arrows */}
            {hasActions ? (
                <div className="flex flex-col items-center gap-1 ml-3">
                    <button
                        onClick={cyclePrev}
                        className="h-4 w-4 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 text-xs"
                        title="Previous"
                    >
                        ↑
                    </button>
                    <button
                        onClick={cycleNext}
                        className="h-4 w-4 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 text-xs"
                        title="Next"
                    >
                        ↓
                    </button>
                </div>
            ) : (
                <div className="w-5" />
            )}
        </button>
    );
}
