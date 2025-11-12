import { FeatureSection } from "../../components/presentation";

const features = [
    {
        id: "overview",
        title: "Welcome to TaskBar",
        description:
            "Experience the next generation of automation. TaskBar brings your desktop, browser, and AI assistant together in one seamless environment.",
    },
    {
        id: "automation",
        title: "Automation",
        description:
            "Automate anything — from launching applications to managing web workflows and routines. TaskBar connects your apps and the web effortlessly.",
    },
    {
        id: "ai",
        title: "AI Assistant",
        description:
            "Ask, execute, and create. Your AI assistant lives inside TaskBar, helping you perform tasks, answer questions, and generate ideas in real time.",
    },
    {
        id: "metrics",
        title: "Metrics & Insights",
        description:
            "Visualize how your workflows perform, discover bottlenecks, and optimize your routines with built-in metrics and logs.",
    },
    {
        id: "extensions",
        title: "Extensions",
        description:
            "Expand TaskBar’s capabilities with modular extensions — from custom tiles to third-party integrations.",
    },
];

export default function Presentation() {
    return (
        <>
            {features.map((f) => (
                <FeatureSection key={f.id} id={f.id} title={f.title} description={f.description} />
            ))}
            <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/10">
                <p>© {new Date().getFullYear()} TaskBar • Crafted by SimonDevLabs</p>
            </footer>
        </>
    );
}
