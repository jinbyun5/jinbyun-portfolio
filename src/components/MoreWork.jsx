import { useNavigate } from 'react-router-dom';

import ProjectCard from './ProjectCard';

import { projects } from '../data/projects';

function MoreWork({ currentSlug }) {

    const navigate = useNavigate();
    const otherProjects = projects.filter(p => p.slug !== currentSlug);

    return (
        <section className="col-span-4 md:col-span-12 pt-16 space-y-8">
            <h2 className="text-center pb-6 md:text-3xl">View More Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherProjects.map(project => (
                    <ProjectCard
                        key={project.slug}
                        {...project}
                        onClick={() => navigate(`/works/${project.slug}`)}
                    />
                ))}
            </div>
        </section>
    );
}

export default MoreWork;