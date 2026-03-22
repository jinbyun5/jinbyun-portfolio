import { useNavigate } from 'react-router-dom';

import FadeUp from '../components/FadeUp';
import ProjectCard from '../components/ProjectCard';
import HeroSection from '../components/HeroSection';

import { projects } from '../data/projects';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <FadeUp>
                <HeroSection />
            </FadeUp>
            <FadeUp>
                <section className="border-b-[1px] border-dashed border-jb-blue/50 pb-14">
                    <header className="flex items-center gap-3 py-12 md:py-14">
                        <span className="text-2xl md:text-3xl animate-pulse">★</span>
                        <h2 className="italic md:text-[2.125rem]">Selected Works</h2>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-11">
                        {projects
                            .filter(p => ['hm-app-redesign', 'the-papery'].includes(p.slug))
                            .map(project => (
                                <ProjectCard
                                    key={project.id}
                                    {...project}
                                    onClick={() => navigate(`/works/${project.slug}`)}
                                />
                            ))
                        }
                    </div>
                </section>
            </FadeUp>
        </>
    );
}

export default Home;