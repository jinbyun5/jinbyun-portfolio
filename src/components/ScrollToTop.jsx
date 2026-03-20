import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { motion, AnimatePresence } from "motion/react";
import { CaretDoubleUpIcon } from '@phosphor-icons/react';

function ScrollToTop() {

    const [showScroll, setShowScroll] = useState(false);
    const { pathname } = useLocation();

    // Scroll to the top when navigating pages
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Button visibility
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {showScroll && (
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onClick={ scrollToTop }
                    className="fixed bottom-10 right-6 z-[100] group w-12 h-12 flex items-center justify-center border border-jb-blue rounded-full bg-jb-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-jb-blue hover:border-jb-white"
                >
                    <CaretDoubleUpIcon 
                        size={20} 
                        className="group-hover:text-jb-white transition-colors duration-300"
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
}

export default ScrollToTop;