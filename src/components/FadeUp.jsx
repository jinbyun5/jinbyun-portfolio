import { motion } from "motion/react";

function FadeUp({ children, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}

export default FadeUp;