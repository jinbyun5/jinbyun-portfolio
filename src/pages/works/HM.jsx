import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ArrowLeftIcon } from '@phosphor-icons/react';

import WorkSectionLayout from '../../components/WorkSectionLayout';
import HighlightCard from '../../components/HighlightCard';
import ProjectCard from '../../components/ProjectCard';

import { projects } from '../../data/projects';

import thumbHm from '../../assets/hm/thumb-hm.webp';
import journeyMap from '../../assets/hm/journey-map.webp';
import lofiWireframes from '../../assets/hm/lofi-wireframes.webp';
import hifiWireframes from '../../assets/hm/hifi-wireframes.webp';
import solution1 from '../../assets/hm/solution-1.jpg';

function HM() {

    const otherProjects = projects.filter(p => p.slug !== 'hm-app-redesign');

    return (
        <section className="w-full py-16 text-jb-brown">
            <div className="grid grid-cols-4 md:grid-cols-12">

                {/* Link to All Works */}
                <nav className="col-span-4 md:col-span-12 mb-10">
                    <Link 
                        to="/works" 
                        className="group flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase transition-all hover:text-jb-blue"
                    >
                        <ArrowLeftIcon size={20}/>
                        <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-1">All Works</span>
                    </Link>
                </nav>
                
                {/* Header */}
                <header className="col-span-4 md:col-span-12 grid grid-cols-4 md:grid-cols-12 items-end gap-x-4">
                    <div className="col-span-4 md:col-span-6">
                        <div className="flex flex-col gap-4 text-center md:text-start">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-jb-blue">
                                <span className="text-xl md:text-2xl animate-pulse">★</span>
                                <span className="text-sm font-medium tracking-widest uppercase md:text-base">UX Case Study</span>
                            </div>
                        <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl pb-4">H&M App <br className="hidden md:block" /> Redesign</h1>
                        <p className="text-gray-500 md:text-lg">Identifying usability issues and proposing a clearer, more cohesive redesign.</p>
                        </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="col-span-4 md:col-span-5 md:col-start-8 md:mt-0 space-y-6 mt-12">
                        <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                            <h6 className="font-sans md:text-lg font-bold  tracking-wider">TOOLS</h6>
                            <p className="lg:b5">Figma, Photoshop</p>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                            <h6 className="font-sans md:text-lg font-bold">ROLE</h6>
                            <p className="lg:b5">UX/UI Designer</p>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                            <h6 className="font-sans md:text-lg font-bold">TIMLINE</h6>
                            <p className="lg:b5">2 weeks</p>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                            <h6 className="font-sans md:text-lg font-bold">INDUSTRY</h6>
                            <p className="lg:b5">E-commerce, Fashion Retail</p>
                        </div>
                        
                    </div>
                </header>

                {/* Thumbnail Image */}
                <figure className="col-span-4 md:col-span-12 py-16 md:py-20">
                    <div className="w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden">
                        <img 
                            src={thumbHm}
                            alt="H&M App Redesign Overview" 
                            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" 
                        />
                    </div>
                </figure>

                {/* Project Content */}
                <article className="col-span-4 md:col-span-12 mt-10 space-y-20 bg-jb-white px-10 py-12">

                    {/* 01 Project Overview */}
                    <WorkSectionLayout number="01" title="Project Overview">
                        <h4 className="b4 md:text-3xl">Reimagining the fashion shopping experience.</h4>
                        <div className="space-y-4 md:text-lg">
                            <p>This project focused on identifying usability and interface design issues in the H&M mobile app and proposing design improvements to create a clearer and more intuitive shopping experience.</p>
                            <p>By closely analyzing the app experience, I aimed to understand where users might feel confused or uncertain and to identify opportunities to improve usability, visual consistency, and interaction feedback through more cohesive UX/UI design.</p>
                        </div>
                    </WorkSectionLayout>

                    {/* 02 Challenge */}
                    <WorkSectionLayout number="02" title="The Challenge">
                        <h4 className="b4 md:text-3xl">Common tasks required uncommon effort.</h4>
                        <div className="space-y-4 md:text-lg">
                            <p>As a regular user of the H&M app, I noticed that common tasks often felt more complicated than necessary. Navigating the app required extra effort due to unclear icons, inconsistent layouts, and limited feedback during interactions. These issues made the overall experience feel less intuitive and harder to use than expected.</p>
                        </div>
                        {/* Mission */}
                        <HighlightCard 
                            title="The Mission" 
                            content="To improve the shopping experience by clarifying navigation, strengthening visual hierarchy, and improving interaction feedback through a more cohesive UI design.">
                        </HighlightCard>
                    </WorkSectionLayout>

                    {/* 03 User Research */}
                    <WorkSectionLayout number="03" title="User Research">
                        <div className="space-y-4 md:text-lg">
                            <p>To understand usability issues, I took a multi-method approach:</p>
                            <ul className="list-disc list-outside ml-8 space-y-1">
                                <li>Heuristic Evaluation using Nielsen's 10 Usability Heuristics </li>
                                <li>Personal use analysis</li>
                                <li>Competitive benchmarking with similar retail apps (Zara, Blackup)</li>
                            </ul>
                        </div>

                        {/* Competitive Analysis */}
                        <div className="space-y-8 md:text-lg py-10">
                            <h4 className="b4 md:text-3xl">Competitive Analysis</h4>
                            {/* <p>After analyzing the competitors, I mapped the current shopping journey to identify where usability issues create the most friction and frustration, and to uncover opportunities for improvement.</p>
                            <img src={journeyMap} className="w-full rounded-xl" alt="User Journey Map" /> */}
                        </div>

                        {/* User Journey Map */}
                        <div className="space-y-8 md:text-lg py-10">
                            <h4 className="b4 md:text-3xl">Mapping the friction points.</h4>
                            <p>After analyzing the competitors, I mapped the current shopping journey to identify where usability issues create the most friction and frustration, and to uncover opportunities for improvement.</p>
                            <img src={journeyMap} className="w-full rounded-xl" alt="User Journey Map" />
                        </div>
                        
                        {/* Key Pain Points */}
                        <div className="py-10 space-y-6">
                            <h4 className="b4 md:text-3xl">Key Pain Points</h4>
                            <p className="md:text-lg">
                                Through this research, I identified three critical areas affecting shopping experience:
                            </p>
                            <HighlightCard 
                                title="1) Unclear Navigation" 
                                content="The top navigation bar disappears when scrolling, forcing users to scroll back up. There's no visual indicator for swipe interactions, and the '+' icon doesn't clearly communicate its menu function.">
                            </HighlightCard>
                            <HighlightCard 
                                title="2) Weak Visual Hierarchy" 
                                content="Oversized images and undersized text reduce readability. Text positioning is inconsistent, color swatches are too small, and product cards lack spacing and contrast.">
                            </HighlightCard>
                            <HighlightCard 
                                title="3) Lack of Feedback" 
                                content="Clickable text appears as plain text, icons have low contrast against dark backgrounds, and key actions like adding to cart require unnecessary scrolling.">
                            </HighlightCard>
                        </div>
                    </WorkSectionLayout>

                    {/* 04 Design Process */}
                    <WorkSectionLayout number="04" title="Design Process">
                        <h4 className="b4 md:text-3xl">User flow</h4>
                        <div className="space-y-4 md:text-lg">
                            {/* <p></p> */}
                            {/* <img src={journeyMap} className="w-full rounded-xl" alt="User Journey Map" /> */}
                        </div>

                        <div className="space-y-8 md:text-lg py-10">
                            <h4 className="b4 md:text-3xl">wireframes</h4>
                            <p>To explore solutions, I created wireframes ranging from low-fidelity sketches to high-fidelity mock-ups. This iterative process allowed me to test different layout approaches and validate key redesign decisions before finalizing the interface.</p>
                            <img src={lofiWireframes} className="w-full rounded-xl" alt="Low Fidelity Wireframes" />
                            <img src={hifiWireframes} className="w-full rounded-xl" alt="High Fidelity Wireframes" />
                        </div>
                    </WorkSectionLayout>

                    {/* 05 The Solution */}
                    <WorkSectionLayout number="05" title="The Solution">
                        <h4 className="b4 md:text-3xl">Before & After</h4>
                        <div className="space-y-4 md:text-lg">
                            <p>To address these usability issues, I redesigned key interface elements with a focus on clarity, consistency, and intuitive interaction.</p>
                            <img src={solution1} className="w-full rounded-xl" alt="User Journey Map" />
                            <p>The original navigation had several friction points — users couldn't tell the page was swipeable, had to scroll back up to access the nav bar, and struggled with unclear icons and low-contrast active states. To resolve this, I fixed the nav bar, added a page indicator, replaced the ambiguous '+' with a familiar hamburger menu positioned for thumb reachability, and introduced colored backgrounds to make the active state immediately clear.</p>
                        </div>
                    </WorkSectionLayout>

                    {/* 06 Final Design */}
                    <WorkSectionLayout number="06" title="Final Design">
                        <h4 className="b4 md:text-3xl">Interactive Prototype</h4>
                        <div className="space-y-4 md:text-lg">
                            <div className="relative w-full max-w-[400px] bg-gray-100 rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                                <div style={{ paddingBottom: '200%' }}>
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src="https://embed.figma.com/proto/4mSahZ2KiFZZcaX90j0HP7/H-M-Redesign?node-id=400-441&viewport=143%2C146%2C0.14&scaling=scale-down&content-scaling=fixed&starting-point-node-id=400%3A441&page-id=400%3A440&embed-host=share"
                                        allowFullScreen
                                        title="H&M App Redesign Interactive Prototype"
                                    />
                                </div>
                            </div>
                        </div>
                    </WorkSectionLayout>

                    {/* 07 Reflection */}
                    <WorkSectionLayout number="07" title="Reflection">
                        <div className="space-y-4 md:text-lg">
                            <h4 className="b4 md:text-3xl">What I learned</h4>
                            <p>This project started with my own frustration using the H&M app, but through systematic analysis, I learned to look beyond personal preferences and identify genuine usability issues. The heuristic evaluation and user scenario helped me understand that seemingly small problems can significantly impact the shopping experience.</p>
                            <p>I discovered that impactful UX improvements don't always require dramatic redesigns. Many of my solutions involved subtle refinements: making navigation always visible, enlarging color swatches, and strengthening visual feedback. These changes respect H&M's existing design language while meaningfully improving usability. The challenge of working within brand constraints actually made me a more thoughtful designer, forcing me to justify each decision and find elegant solutions to complex problems.</p>
                        </div>
                        <div className="space-y-4 md:text-lg">
                            <h4 className="b4 md:text-3xl">Next Steps</h4>
                            <ul className="list-disc list-outside ml-8 space-y-1">
                                <li>Conduct usability testing to validate improvements with real users</li>
                                <li>Measure impact on task completion time and error rates</li>
                                <li>Extend the redesign to other flows like search and checkout</li>
                            </ul>
                        </div>
                    </WorkSectionLayout>
                </article>

                <div className="col-span-4 md:col-span-12 border-b border-jb-blue/50 border-dashed py-20"></div>

                {/* View More Works */}
                <div className="relative col-span-4 md:col-span-12 py-20 overflow-hidden">
                    <div className="pb-12 text-center">
                        <span className="text-jb-blue font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Next Project</span>
                        <h3 className="text-2xl md:text-3xl font-bold mt-3 text-jb-brown">View More Works</h3>
                    </div>

                    <div className="px-0 md:mx-14"> 
                        <Swiper
                            modules={[Pagination, Navigation]}
                            spaceBetween={20}
                            slidesPerView={1.2}
                            // navigation={true}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 40,
                                }
                            }}
                            className="project-swiper"
                        >
                            {otherProjects.map((project) => (
                                <SwiperSlide key={project.id}>
                                    <ProjectCard 
                                        {...project} 
                                        onClick={() => { navigate(`/works/${project.slug}`); }} 
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HM;