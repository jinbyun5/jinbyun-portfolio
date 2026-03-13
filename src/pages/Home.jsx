import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { motion } from "motion/react";

import ProjectCard from '../components/ProjectCard';
import ScrollToTop from '../components/ScrollToTop';

import { projects } from '../data/projects';

import stickerCamera from '../assets/sticker-camera.webp';
import stickerCat from '../assets/sticker-cat.webp';
import stickerClover from '../assets/sticker-clover.webp';
import stickerFace from '../assets/sticker-face.gif';

function Home() {

    const navigate = useNavigate();

    const [index, setIndex] = useState(0);

    const dragAreaRef = useRef(null);

    const keywords = ['UX/UI', 'product', 'interaction', 'visual', 'web'];    
    
    const stickers = [
        { 
            id: 1, 
            src: stickerCamera, 
            size: "w-36 md:w-40 lg:w-48", 
            pos: "-bottom-16 -left-20 md:bottom-64 md:-left-28 lg:bottom-72 lg:-left-44", 
            rotate: -25 
        },
        { 
            id: 2, 
            src: stickerCat, 
            size: "w-32 md:w-36 lg:w-40", 
            pos: "-bottom-32 left-8 md:-bottom-10 md:-left-20 lg:-bottom-6 lg:-left-28", 
            rotate: 0 
        },
        { 
            id: 3, 
            src: stickerClover, 
            size: "w-20 md:w-24 lg:w-24", 
            pos: "-bottom-16 left-40 md:left-[34rem] md:bottom-64 lg:left-[42rem] lg:bottom-60", 
            rotate: -25 
        },
        { 
            id: 4, 
            src: stickerFace, 
            size: "w-32 md:w-32 lg:w-36", 
            pos: "-bottom-20 left-60 md:left-[28rem] md:-bottom-10 lg:left-[30rem] lg:-bottom-4", 
            rotate: -15 
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % keywords.length);
        }, 2000);

        return () => {
            clearInterval(timer);
        }
    }, []);
    
    const [isMobile, setIsMobile] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth >= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <section
                ref={dragAreaRef}
                className="flex justify-center items-start border-b-[1px] border-dashed border-jb-blue/50 pt-5 pb-40"
            >
                <div className="relative">
                    <div className="absolute font-mono text-xs md:text-sm bg-jb-blue text-jb-white py-1 px-3 w-fit top-8 left-6 -rotate-6 md:px-4 md:top-5 md:left-32">Based in Vancouver</div>

                    {/* flower sticker */}
                    <div></div>
                    
                    <div className="flex flex-col justify-center items-center py-20 gap-8 md:gap-12 text-center">
                        <div className="emphasis text-3xl md:text-4xl">Jin Byun</div>
                        <div className="d6 leading-8 md:d5 md:leading-10 max-w-64 md:max-w-xl">A <span className="underline underline-offset-4 decoration-wavy decoration-2 decoration-jb-yellow">UX/UI designer</span> with a front-end background, creating practical and user-centered experiences.</div>
                        <div className="d5 md:d4 flex justify-center items-center gap-5 mt-4 md:gap-6">
                            <span>I'm a</span>
                            <span className="inline-flex items-center justify-center border border-jb-blue rounded-full w-32 h-9 leading-none md:w-36 md:h-10">
                                <span 
                                    key={index} 
                                    className="emphasis text-lg md:text-xl animate-fade-in-out"
                                >
                                    {keywords[index]}
                                </span>
                            </span>
                            <span>designer.</span>
                        </div>
                    </div>

                    {stickers.map((sticker) => (
                        <motion.div
                        key={`${sticker.id}-${isMobile}`}
                            drag
                            dragConstraints={dragAreaRef}
                            dragMomentum={false}
                            initial={{ rotate: sticker.rotate }}
                            className={`absolute cursor-grab active:cursor-grabbing ${sticker.size} ${sticker.pos}`}
                        >
                            <img src={sticker.src} alt="sticker" className="drop-shadow-lg pointer-events-none"/>
                        </motion.div>
                    ))}

                </div>
            </section>

            <section className="border-b-[1px] border-dashed border-jb-blue/50 pb-14">
                <header className="flex items-center gap-3 py-12 md:py-14">
                    <span className="text-2xl md:text-3xl animate-pulse">★</span>
                    <h2 className="italic md:text-[2.125rem]">Selected Works</h2>
                    {/* <p className="hidden md:block text-gray-400 text-sm">View more works →</p> */}
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-11">
                    {/* {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} onClick={() => {navigate(`/works/${project.slug}`);}}></ProjectCard>
                    ))} */}
                    {projects
                        .filter(p => ['hm-app-redesign', 'the-papery'].includes(p.slug))
                        .map(project => (
                            <ProjectCard key={project.id} {...project} onClick={() => navigate(`/works/${project.slug}`)} />
                        ))
                    }
                </div>
            </section>

            <ScrollToTop/>
        </>
    );
}

export default Home;
