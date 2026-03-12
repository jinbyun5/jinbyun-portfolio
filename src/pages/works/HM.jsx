import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ArrowLeftIcon, CrosshairIcon, SmileySadIcon, NetworkSlashIcon, EyeSlashIcon } from '@phosphor-icons/react';

import ProjectHeader from '../../components/ProjectHeader';
import WorkSectionLayout from '../../components/WorkSectionLayout';
import HighlightCard from '../../components/HighlightCard';
import ProjectCard from '../../components/ProjectCard';

import { projects } from '../../data/projects';

import heroImage from '../../assets/hm/hero-image.webp';
import competitiveAnalysis from '../../assets/hm/competitive-analysis.webp';
import journeyMap from '../../assets/hm/journey-map.webp';
import userFlow from '../../assets/hm/user-flow.webp';
import lofiWireframes from '../../assets/hm/lofi-wireframes.webp';
import hifiWireframes from '../../assets/hm/hifi-wireframes.webp';

import solution1 from '../../assets/hm/solution-1.webp';
import solution2 from '../../assets/hm/solution-2.webp'
import solution3 from '../../assets/hm/solution-3.webp'
import solution4 from '../../assets/hm/solution-4.webp'

function HM() {

    const [activeWireframe, setActiveWireframe] = useState('lofi');

    const project = projects.find(p => p.slug === 'hm-app-redesign');
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
                <ProjectHeader {...project} />

                {/* Thumbnail Image */}
                <figure className="col-span-4 md:col-span-12 py-16 md:py-20">
                    <div className="w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden">
                        <img 
                            src={heroImage}
                            alt="H&M App Redesign Overview" 
                            className="w-full h-full object-cover object-center" 
                        />
                    </div>
                </figure>

                {/* Project Content */}
                <article className="col-span-4 md:col-span-12 mt-10 space-y-20 bg-[#fbfbfb] rounded-2xl px-6 md:px-10 py-12 -mx-5 md:mx-0">

                    {/* 01 Project Overview */}
                    <WorkSectionLayout number="01" title="Project Overview">
                        <h4 className="b4 md:b2">Reimagining the fashion shopping experience</h4>
                        <div className="space-y-4 md:text-lg">
                            <p>This project focused on identifying usability and interface design issues in the H&M mobile app and proposing design improvements to create a clearer and more intuitive shopping experience.</p>
                            <p>By closely analyzing the app experience, I aimed to understand where users might feel confused or uncertain and to identify opportunities to improve usability, visual consistency, and interaction feedback through more cohesive UX/UI design.</p>
                        </div>
                    </WorkSectionLayout>

                    {/* 02 Challenge */}
                    <WorkSectionLayout number="02" title="The Challenge">
                        <h4 className="b4 md:b2">Common tasks required uncommon effort</h4>
                        <div className="space-y-4 md:text-lg">
                            <p>As a regular user of the H&M app, I noticed that common tasks often felt more complicated than necessary. Navigating the app required extra effort due to unclear icons, inconsistent layouts, and limited feedback during interactions. These issues made the overall experience feel less intuitive and harder to use than expected.</p>
                        </div>
                        {/* Mission */}
                        <HighlightCard
                            icon={<CrosshairIcon size={24} />}
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
                                <li>Competitive benchmarking with similar retail apps</li>
                            </ul>
                        </div>

                        {/* Competitive Analysis */}
                        <div className="space-y-8 md:text-lg py-8">
                            <h4 className="b4 md:b2">Competitive analysis</h4>
                            <p>To identify design opportunities for H&M, I analyzed three key competitors across navigation, category structure, product listing, item selection, and CTA placement — looking for patterns that balance visual appeal with usability.</p>
                            <img src={competitiveAnalysis} className="w-full rounded-xl" alt="Competitive Analysis" />
                            <p>Zara and Mango prioritized visual immersion with minimal design, while Uniqlo leaned toward functional clarity. Given H&M's shift toward a more premium positioning, the visual-first approach informed design decisions, with usability refinements drawn from patterns across all three.</p>
                        </div>

                        {/* User Journey Map */}
                        <div className="space-y-8 md:text-lg py-8">
                            <h4 className="b4 md:b2">Mapping the friction points</h4>
                            <p>After analyzing the competitors, I mapped the current shopping journey to identify where usability issues create the most friction and frustration, and to uncover opportunities for improvement.</p>
                            <img src={journeyMap} className="w-full rounded-xl" alt="User Journey Map" />
                        </div>
                        
                        {/* Key Pain Points */}
                        <div className="py-8 space-y-6">
                            <h4 className="b4 md:b2">Key pain points</h4>
                            <p className="md:text-lg">
                                Through this research, I identified three critical areas affecting shopping experience:
                            </p>
                            <HighlightCard 
                                icon={<SmileySadIcon size={24} />}
                                title="Unclear Navigation" 
                                content="The top navigation bar disappears when scrolling, forcing users to scroll back up. There's no visual indicator for swipe interactions, and the '+' icon doesn't clearly communicate its menu function.">
                            </HighlightCard>
                            <div className="flex flex-col md:flex-row gap-6">
                                <HighlightCard 
                                    icon={<NetworkSlashIcon size={24} />}
                                    title="Weak Visual Hierarchy" 
                                    content="Oversized images and undersized text reduce readability. Text positioning is inconsistent, color swatches are too small, and product cards lack spacing and contrast.">
                                </HighlightCard>
                                <HighlightCard 
                                    icon={<EyeSlashIcon size={24} />}
                                    title="Lack of Feedback" 
                                    content="Clickable text appears as plain text, icons have low contrast against dark backgrounds, and key actions like adding to cart require unnecessary scrolling.">
                                </HighlightCard>
                            </div>
                        </div>
                    </WorkSectionLayout>

                    {/* 04 Design Process */}
                    <WorkSectionLayout number="04" title="Design Process">
                        <h4 className="b4 md:b2">User flow</h4>
                        <div className="space-y-4 md:text-lg">
                            <p>The flow illustrates two browsing entry points — via home sections or the bottom navigation — both leading to the same journey through product listing, detail, and checkout. Rather than restructuring the flow, the redesign focused on reducing friction at each stage so users can move through the journey with minimal confusion and make purchase decisions with confidence.</p>
                            <img src={userFlow} className="w-full rounded-xl" alt="User Flow" />
                        </div>

                        <div className="space-y-8 md:text-lg py-10">
                            <h4 className="b4 md:b2">Shaping the solutions</h4>
                            <p>To explore solutions, I created wireframes ranging from low-fidelity sketches to high-fidelity mock-ups. This iterative process allowed me to test different layout approaches and validate key redesign decisions before finalizing the interface.</p>
                            <div className="flex gap-3 mb-4 items-center justify-center">
                                <button 
                                    onClick={() => setActiveWireframe('lofi')}
                                    className={`px-4 py-2 rounded-full text-sm md:text-base font-medium 
                                        ${activeWireframe === 'lofi' ? 'bg-jb-blue text-jb-white' : 'border border-jb-blue text-jb-blue'}`}
                                >
                                    Low Fidelity
                                </button>
                                <button 
                                    onClick={() => setActiveWireframe('hifi')}
                                    className={`px-4 py-2 rounded-full text-sm md:text-base font-medium
                                        ${activeWireframe === 'hifi' ? 'bg-jb-blue text-jb-white' : 'border border-jb-blue text-jb-blue'}`}
                                >
                                    High Fidelity
                                </button>
                            </div>
                            {activeWireframe === 'lofi' 
                                ? <img src={lofiWireframes} className="w-full rounded-xl" alt="Low Fidelity Wireframes" />
                                : <img src={hifiWireframes} className="w-full rounded-xl" alt="High Fidelity Wireframes" />
                            }
                        </div>
                    </WorkSectionLayout>

                    {/* 05 The Solution */}
                    <WorkSectionLayout number="05" title="The Solution">
                        <h4 className="b4 md:b2">Before & After</h4>
                        <div className="space-y-4 md:text-lg">
                            <p>To address these usability issues, I redesigned key interface elements with a focus on clarity, consistency, and intuitive interaction.</p>
                            <div className="space-y-16 pt-6">
                                <div className="space-y-4">
                                    <h3 className="b5 md:b4 before:content-['•'] before:mr-2">Navigation</h3>
                                    <p>Following Jakob's Law, I replaced the ambiguous "+" with a familiar chevron dropdown to reduce cognitive load and positioned it to the right for thumb reachability. I added the H&M logo for consistent brand presence, as H&M was the only competitor without a brand touchpoint within the app. I also added a swipe indicator for discoverability and introduced color-coded active states to reflect Nielsen's Visibility of system status heuristic.</p>
                                    <img src={solution1} className="w-full rounded-xl" alt="Solution 1" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="b5 md:b4 before:content-['•'] before:mr-2">Categories</h3>
                                    <p>I separated promotions as banner images for visual differentiation and reorganized categories in a body-order sequence aligning with users' mental models of how they think about getting dressed. This also follows the principle of progressive disclosure, guiding users from broader clothing types to more specific items naturally.</p>
                                    <img src={solution2} className="w-full rounded-xl" alt="Solution 2" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="b5 md:b4 before:content-['•'] before:mr-2">Product Listing Page</h3>
                                    <p>Applying the Gestalt Law of Common Region, I replaced the card grid with a swipeable layout to give each item a distinct boundary for clearer separation. I also removed the redundant "Explore" CTA, replacing it with underlined titles to signal clickability through affordance. Finally, I strengthened visual hierarchy with bolder, larger titles and added white space for better visual balance.</p>
                                    <img src={solution3} className="w-full rounded-xl" alt="Solution 3" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="b5 md:b4 before:content-['•'] before:mr-2">Product Detail Page</h3>
                                    <p>Applying the Gestalt figure-ground principle, I added backgrounds to navigation icons to ensure visibility against any image. Following Nielsen's visibility of system status, I improved size selection with filled indicators and color-coded stock availability for immediate recognition. Finally, applying Fitts's Law, I fixed the ADD button for persistent access, reducing friction in the purchase flow.</p>
                                    <img src={solution4} className="w-full rounded-xl" alt="Solution 4" />
                                </div>
                            </div>
                        </div>
                    </WorkSectionLayout>

                    {/* 06 Final Design */}
                    <WorkSectionLayout number="06" title="Final Design">
                        <h4 className="b4 md:b2">Interactive Prototype</h4>
                        <div className="space-y-4 md:text-lg">
                            <div className="relative w-full  bg-gray-100 rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                                <div style={{ paddingBottom: '90%' }}>
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src="https://embed.figma.com/proto/QV5iVjqPfbXkafgrNaJDJ7/H-M-Redesign--New-?node-id=3001-1597&viewport=269%2C204%2C0.71&scaling=scale-down&content-scaling=fixed&page-id=400%3A440&starting-point-node-id=3001%3A1597&embed-host=share"
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
                            <h4 className="b4 md:b2">What I learned</h4>
                            <p>This project started with my own frustration using the H&M app, but through systematic analysis, I learned to look beyond personal preferences and identify genuine usability issues. The heuristic evaluation and user scenario helped me understand that seemingly small problems can significantly impact the shopping experience.</p>
                            <p>I discovered that impactful UX improvements don't always require dramatic redesigns. Many of my solutions involved subtle refinements: making navigation always visible, enlarging color swatches, and strengthening visual feedback. These changes respect H&M's existing design language while meaningfully improving usability. The challenge of working within brand constraints actually made me a more thoughtful designer, forcing me to justify each decision and find elegant solutions to complex problems.</p>
                        </div>
                        <div className="space-y-4 md:text-lg">
                            <h4 className="b4 md:b2">Next Steps</h4>
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