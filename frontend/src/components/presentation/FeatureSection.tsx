import { motion } from "framer-motion";

interface FeatureSectionProps {
    id: string;
    title: string;
    description: string;
}

export default function FeatureSection({ id, title, description }: FeatureSectionProps) {
    return (
        <motion.section
            id={id}
            className="min-h-[80vh] flex flex-col justify-center scroll-mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">{title}</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{description}</p>
        </motion.section>
    );
}
