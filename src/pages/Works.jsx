import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import ProjectCard from '../components/ProjectCard';
import ScrollToTop from '../components/ScrollToTop';

import { projects } from '../data/projects';

function Works() {

    const navigate = useNavigate();

    const [filter, setFilter] = useState('All');
    const categories = ['All', 'UX/UI', 'Case Study', 'Web Dev'];

    const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.tags.includes(filter));

    return (
        <>
            <section className="border-b-[1px] border-dashed border-jb-blue/50 py-12">
                <div className="flex items-center gap-3 mb-10 md:mb-12">
                    <span className="text-2xl md:text-3xl animate-pulse">★</span>
                    <h2 className="italic md:text-[2.125rem]">Works</h2>
                </div>

                <div className="border-b-[1px] border-dashed border-jb-blue/50 mb-10"></div>

                {/* Filter */}
                <div className="flex flex-wrap gap-3 mb-10">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                    {/* {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} {...project} onClick={() => {navigate(`/works/${project.slug}`);}}></ProjectCard>
                    ))} */}
                    {filteredProjects
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

export default Works;