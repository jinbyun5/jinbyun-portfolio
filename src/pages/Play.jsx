import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Masonry from 'react-masonry-css';

import FadeUp from '../components/FadeUp';

import goldFish from '../assets/playground/goldfish.webp';

import { playground } from '../data/playground';

function Play() {

    const [selectedId, setSelectedId] = useState(null);

    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Graphic Design', 'Print', 'Illustration', 'Animation'];

    const breakpointColumnsObj = { 
        default: 3, 
        1023: 2, 
        767: 1 
    };

    const filteredProjects = filter === 'All' ? playground : playground.filter(project => project.category.includes(filter));

    return (
        <>
            <FadeUp>
                <section className="grid grid-cols-4 lg:grid-cols-12 pt-12">
                    <div className="col-span-4 lg:col-span-12 flex items-center gap-3">
                        <span className="text-2xl md:text-3xl animate-pulse">★</span>
                        <h1 className="italic text-3xl md:text-4xl">Play!</h1>
                    </div>

                    <div className="col-span-4 lg:col-span-12 lg:col-start-6 flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-6">
                        <img src={goldFish} alt="Goldfish" className="w-20 h-auto self-end" />
                        <p className="d6 text-sm leading-6 md:text-base md:leading-7">This is my playground — a space where I explore freely and follow curiosity wherever it leads. Here, I experiment with graphic design, illustration, animation, and whatever else sparks my interest.</p>
                    </div>

                    <div className="col-span-4 lg:col-span-12 border-b-[1px] border-dashed border-jb-blue/50 my-10"></div>

                    <div className="col-span-4 lg:col-span-12 flex flex-wrap gap-3 mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`b6 text-sm tracking-wider md:text-base px-4 py-1 rounded-full uppercase border transition-all lg:b5 ${filter === cat ? 'bg-jb-blue text-jb-white border-jb-blue font-medium' : 'bg-jb-white border-jb-blue hover:bg-jb-blue hover:text-jb-white'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="col-span-4 lg:col-span-12">
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            {filteredProjects.map((project) => (
                                <FadeUp key={project.id} className="mb-8">
                                    <motion.div 
                                        onClick={() => setSelectedId(project.id)}
                                        className={`group relative ${project.ratio} w-full rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.01] cursor-pointer`}
                                    >
                                        {project.video? 
                                            <video
                                                src={project.video}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        : <motion.img
                                                layoutId={`img-${project.id}`}
                                                src={project.image} 
                                                alt={project.title} 
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                            />
                                        }
                                        <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                                            <div className="space-y-3 text-center">
                                                {/* <p className="text-xs font-mono uppercase tracking-wider text-jb-white">{project.category}</p> */}
                                                <h3 className="text-xl text-jb-white font-semibold leading-tight">{project.title}</h3>
                                                <p className="text-sm text-white md:max-w-[18.75rem]">{project.description}</p>
                                                <div className="flex items-center justify-center gap-1 pt-2">
                                                    {project.tools?.map((toolIcon, index) => (
                                                        <div key={index} className="w-5 h-5 md:w-6 md:h-6">
                                                            <img 
                                                                src={toolIcon} 
                                                                alt="tool" 
                                                                className="w-full h-full object-contain opacity-90" 
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </FadeUp>
                            ))}
                        </Masonry>

                        <AnimatePresence>
                            {selectedId && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
                                    {/* Make background dark */}
                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onClick={() => setSelectedId(null)}
                                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-zoom-out"
                                    />
                                    {playground.find(p => p.id === selectedId)?.video
                                        ? <video
                                            src={playground.find(p => p.id === selectedId)?.video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            controls
                                            className="relative max-w-full max-h-full rounded-lg shadow-2xl z-50"
                                        />
                                        : <motion.img
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.8, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            src={playground.find(p => p.id === selectedId)?.image}
                                            className="relative max-w-full max-h-full rounded-lg shadow-2xl z-50 pointer-events-none"
                                        />
                                    }
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>
            </FadeUp>
        </>
    );
}

export default Play;