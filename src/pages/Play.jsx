import { useState } from 'react';

import Masonry from 'react-masonry-css';

import ScrollToTop from '../components/ScrollToTop';

import walkingFlower from '../assets/graphic-walking-flower.svg';
import playPostcard from '../assets/play-postcard.webp';
import playMemopad from '../assets/play-memopad.webp';
import playPoster from '../assets/play-poster.jpg';
import playMoviePoster from '../assets/play-movieposter.svg';

function Play() {

    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Graphic Design', 'Illustration', 'Animation'];

    const projects = [
        {
            id: 1,
            image: playPostcard,
            title: "Postcard Design",
            category: "Graphic Design",
            description: "A minimal postcard layout exploring typography and whitespace.",
            ratio: "aspect-video"
        },
        {
            id: 2,
            image: playMemopad,
            title: "Memo Pad",
            category: "Graphic Design",
            description: "tationery design with a focus on tactile, analog aesthetics.",
            ratio: "aspect-video"
        },
        {
            id: 3,
            image: playPoster,
            title: "Let the Right One In",
            category: "Illustration",
            description: "Fan illustration inspired by the cult vampire film.",
            ratio: "aspect-[4/5]"
        },
        {
            id: 4,
            image: playMoviePoster,
            title: "Born to Bloom",
            category: "Graphic Design",
            description: "Collage-style poster mixing photography and hand-lettering.",
            ratio: "aspect-[4/5]"
        },
    ];

    const breakpointColumnsObj = { 
        default: 3, 
        1023: 2, 
        767: 1 
    };

    const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category.includes(filter));

    return (
        <>
            <section className="grid grid-cols-4 lg:grid-cols-12 border-b-[1px] border-dashed border-jb-blue/50 py-12">
                <div className="col-span-4 lg:col-span-12 flex items-center gap-3">
                    <span className="text-2xl md:text-3xl">★</span>
                    <h3 className="md:text-h2">Play!</h3>
                </div>

                <div className="col-span-4 lg:col-span-12 lg:col-start-6 flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4">
                    <img src={walkingFlower} alt="Walking Flower" className="w-20 h-auto self-end" />
                    <div className="flex flex-col gap-4">
                        <p className="d6 text-sm leading-6 md:text-base md:leading-7">This is my playground — a space where I step back from expectations and explore freely, following curiosity wherever it leads.</p>
                        <p className="d6 text-sm leading-6 md:text-base md:leading-7">Here, I experiment across graphic design, illustration, animation, and whatever else happens to spark my interest.</p>
                    </div>
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
                            <div key={project.id} className="mb-8 group">
                                <div className={`relative ${project.ratio} w-full rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.01]`}>
                                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-white/30 p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                                        <div className="space-y-3 text-center">
                                            <p className="text-xs font-mono uppercase tracking-widest">{project.category}</p>
                                            <h5 className="text-jb-brown">{project.title}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </section>

            <ScrollToTop/>

        </>
    );
}

export default Play;