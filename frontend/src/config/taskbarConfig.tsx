export interface TaskbarTileItem {
    id: string;
    title: string;
    subtitle?: string;
    emoji?: string;
    route?: string;
    actions?: {
        items: { id: string; label: string; target: string }[];
    }
}

export interface TaskbarSection {
    title: string;
    description?: string;
    tiles: TaskbarTileItem[];
}
export const taskbarConfig: TaskbarSection[] = [
    {
        title: "Website",
        description: "Explore TaskBar features",
        tiles: [
            {
                id: "home",
                title: "Home",
                subtitle: "Cycle through sections",
                emoji: "🏠",
                actions: {
                    items: [
                        { id: "overview", label: "Overview", target: "/#overview" },
                        { id: "automation", label: "Automation", target: "/#automation" },
                        { id: "ai", label: "AI Assistant", target: "/#ai" },
                        { id: "metrics", label: "Metrics", target: "/#metrics" },
                        { id: "extensions", label: "Extensions", target: "/#extensions" },
                    ],
                },
            },
            {
                id: "download",
                title: "Download",
                subtitle: "Get the App",
                emoji: "⬇️",
                route: "/download",
            },
        ],
    },
];
