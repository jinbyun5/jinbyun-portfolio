import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ArrowLeftIcon, CrosshairIcon, SmileySadIcon, NetworkSlashIcon, EyeSlashIcon, FigmaLogoIcon } from '@phosphor-icons/react';

import FadeUp from '../../components/FadeUp';
import ZoomImage from '../../components/ZoomImage';
import ProjectHeader from '../../components/ProjectHeader';
import StickyNavLayout from '../../components/StickyNavLayout';
import WorkSectionLayout from '../../components/WorkSectionLayout';
import HighlightCard from '../../components/HighlightCard';
import ProjectCard from '../../components/ProjectCard';
import ToggleTabs from '../../components/ToggleTabs';
import SolutionCard from '../../components/SolutionCard';
import FigmaEmbed from '../../components/FigmaEmbed';

import { projects } from '../../data/projects';

import heroImage from '../../assets/hm/hero-image.webp';
import competitiveAnalysis from '../../assets/hm/competitive-analysis.webp';
import journeyMap from '../../assets/hm/journey-map.webp';
import userFlow from '../../assets/hm/user-flow.webp';
import lofiWireframes from '../../assets/hm/lofi-wireframes.webp';
import hifiWireframes from '../../assets/hm/hifi-wireframes.webp';

import solution1 from '../../assets/hm/solution-1.webp';
import solution2 from '../../assets/hm/solution-2.webp';
import solution3 from '../../assets/hm/solution-3.webp';
import solution4 from '../../assets/hm/solution-4.webp';

function HM() {

    const [activeWireframe, setActiveWireframe] = useState('lofi');

    const project = projects.find(p => p.slug === 'hm-app-redesign');
    const otherProjects = projects.filter(p => p.slug !== 'hm-app-redesign');

    return (
        <FadeUp>
            <section className="w-full py-16 text-jb-brown">
                <div className="grid grid-cols-4 md:grid-cols-12">

                    {/* Link to All Works */}
                    <nav className="col-span-4 md:col-span-12 mb-10">
                        <Link
                            to="/works"
                            className="group flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-all hover:text-jb-blue"
                        >
                            <ArrowLeftIcon size={20} />
                            <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-1">All Works</span>
                        </Link>
                    </nav>

                    {/* Header */}
                    <ProjectHeader {...project} />

                    {/* Thumbnail Image */}
                    <figure className="col-span-4 md:col-span-12 pt-16 md:pt-20">
                        <div className="w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden">
                            <img
                                src={heroImage}
                                alt="H&M App Redesign Overview"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </figure>

                    <div className="col-span-4 md:col-span-12 flex items-center justify-center py-16">
                        <a
                            href="https://www.figma.com/proto/htjDnzk9yXggt7GvEzx23P/The-Papery--Revision-?page-id=2258%3A3440&node-id=2258-3441&p=f&viewport=176%2C125%2C0.05&t=laXWPMMWzIStpVvw-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2258%3A3441" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-jb-white border border-jb-blue text-jb-blue text-lg rounded-full py-2 px-5 whitespace-nowrap transition-all duration-300 hover:bg-jb-blue hover:text-jb-white shadow-lg flex items-center gap-2"
                        >
                            <FigmaLogoIcon size={20} />
                            View in Figma
                        </a>
                    </div>
                </div>

                {/* Project Content */}
                <div className="w-screen -ml-[calc((100vw-100%)/2)] border-y border-dashed border-jb-blue/50 bg-jb-white">
                    <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[6.25rem]">
                        <StickyNavLayout>

                            {/* 01 Project Overview */}
                            <WorkSectionLayout number="01" title="Project Overview">
                                <div className="space-y-8">
                                    <h2>Reimagining the fashion shopping experience</h2>
                                    <p>This project focused on identifying usability and interface design issues in the H&M mobile app and proposing design improvements to create a clearer and more intuitive shopping experience. By closely analyzing the app experience, I aimed to understand where users might feel confused or uncertain and to identify opportunities to improve usability, visual consistency, and interaction feedback through more cohesive UX/UI design.</p>
                                </div>
                            </WorkSectionLayout>

                            {/* 02 Challenge */}
                            <WorkSectionLayout number="02" title="The Challenge">
                                <div className="space-y-8">
                                    <h2>Common tasks required uncommon effort</h2>
                                    <p>As a regular user of the H&M app, I noticed that common tasks often felt more complicated than necessary. Navigating the app required extra effort due to unclear icons, inconsistent layouts, and limited feedback during interactions. These issues made the overall experience feel less intuitive and harder to use than expected.</p>
                                    <HighlightCard
                                        icon={<CrosshairIcon size={24} />}
                                        title="The Mission"
                                        content="To improve the shopping experience by clarifying navigation, strengthening visual hierarchy, and improving interaction feedback through a more cohesive UI design."
                                    />
                                </div>
                            </WorkSectionLayout>

                            {/* 03 User Research */}
                            <WorkSectionLayout number="03" title="User Research">
                                <div className="space-y-8">
                                    <p>To understand usability issues, I took a multi-method approach:</p>
                                    <ul className="list-disc list-outside ml-8 space-y-1">
                                        <li>Heuristic Evaluation using Nielsen's 10 Usability Heuristics</li>
                                        <li>Personal use analysis</li>
                                        <li>Competitive benchmarking with similar retail apps</li>
                                    </ul>
                                </div>
                                <div className="space-y-8">
                                    <h2>Competitive analysis</h2>
                                    <p>To identify design opportunities for H&M, I analyzed three key competitors across navigation, category structure, product listing, item selection, and CTA placement — looking for patterns that balance visual appeal with usability.</p>
                                    <ZoomImage src={competitiveAnalysis} className="w-full rounded-xl" alt="Competitive Analysis" />
                                    <p>Zara and Mango prioritized visual immersion with minimal design, while Uniqlo leaned toward functional clarity. Given H&M's shift toward a more premium positioning, the visual-first approach informed design decisions, with usability refinements drawn from patterns across all three.</p>
                                </div>
                                <div className="space-y-8">
                                    <h2>Mapping the friction points</h2>
                                    <p>After analyzing the competitors, I mapped the current shopping journey to identify where usability issues create the most friction and frustration, and to uncover opportunities for improvement.</p>
                                    <ZoomImage src={journeyMap} className="w-full rounded-xl" alt="User Journey Map" />
                                </div>
                                <div className="space-y-8">
                                    <h2>Key pain points</h2>
                                    <p>Through this research, I identified three critical areas affecting shopping experience:</p>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <HighlightCard
                                            icon={<SmileySadIcon size={24} />}
                                            title="Unclear Navigation"
                                            content="The top navigation bar disappears when scrolling, forcing users to scroll back up. There's no visual indicator for swipe interactions, and the '+' icon doesn't clearly communicate its menu function."
                                        />
                                        <HighlightCard
                                            icon={<NetworkSlashIcon size={24} />}
                                            title="Weak Visual Hierarchy"
                                            content="Oversized images and undersized text reduce readability. Text positioning is inconsistent, color swatches are too small, and product cards lack spacing and contrast."
                                        />
                                        <HighlightCard
                                            icon={<EyeSlashIcon size={24} />}
                                            title="Lack of Feedback"
                                            content="Clickable text appears as plain text, icons have low contrast against dark backgrounds, and key actions like adding to cart require unnecessary scrolling."
                                        />
                                    </div>
                                </div>
                            </WorkSectionLayout>

                            {/* 04 Design Process */}
                            <WorkSectionLayout number="04" title="Design Process">
                                <div className="space-y-8">
                                    <h2>User flow</h2>
                                    <p>The flow illustrates two browsing entry points — via home sections or the bottom navigation — both leading to the same journey through product listing, detail, and checkout. Rather than restructuring the flow, the redesign focused on reducing friction at each stage so users can move through the journey with minimal confusion and make purchase decisions with confidence.</p>
                                    <ZoomImage src={userFlow} className="w-full rounded-xl" alt="User Flow" />
                                </div>
                                <div className="space-y-8">
                                    <h2>Shaping the solutions</h2>
                                    <p>To explore solutions, I created wireframes ranging from low-fidelity sketches to high-fidelity mock-ups. This iterative process allowed me to test different layout approaches and validate key redesign decisions before finalizing the interface.</p>
                                    <ToggleTabs
                                        tabs={[
                                            { key: 'lofi', label: 'Low Fidelity' },
                                            { key: 'hifi', label: 'High Fidelity' },
                                        ]}
                                        activeTab={activeWireframe}
                                        onTabChange={setActiveWireframe}
                                    />
                                    {activeWireframe === 'lofi'
                                        ? <ZoomImage src={lofiWireframes} className="w-full rounded-xl" alt="Low Fidelity Wireframes" />
                                        : <ZoomImage src={hifiWireframes} className="w-full rounded-xl" alt="High Fidelity Wireframes" />
                                    }
                                </div>
                            </WorkSectionLayout>

                            {/* 05 The Solution */}
                            <WorkSectionLayout number="05" title="The Solution">
                                <div className="space-y-8">
                                    <h2>Before & After</h2>
                                    <p>To address these usability issues, I redesigned key interface elements with a focus on clarity, consistency, and intuitive interaction.</p>
                                    <div className="space-y-10">
                                        <SolutionCard 
                                            number="1" 
                                            title="Navigation" 
                                            after="Following Jakob's Law, I replaced the ambiguous '+' with a familiar chevron dropdown to reduce cognitive load and positioned it to the right for thumb reachability. I added the H&M logo for consistent brand presence, as H&M was the only competitor without a brand touchpoint within the app. I also added a swipe indicator for discoverability and introduced color-coded active states to reflect Nielsen's Visibility of system status heuristic." 
                                            image={solution1} 
                                            alt="Solution 1" 
                                        />
                                        <SolutionCard 
                                            number="2" 
                                            title="Categories" 
                                            after="I separated promotions as banner images for visual differentiation and reorganized categories in a body-order sequence aligning with users' mental models of how they think about getting dressed. This also follows the principle of progressive disclosure, guiding users from broader clothing types to more specific items naturally." 
                                            image={solution2} 
                                            alt="Solution 2" 
                                        />
                                        <SolutionCard 
                                            number="3" 
                                            title="Product Listing Page" 
                                            after="Applying the Gestalt Law of Common Region, I replaced the card grid with a swipeable layout to give each item a distinct boundary for clearer separation. I also removed the redundant 'Explore' CTA, replacing it with underlined titles to signal clickability through affordance. Finally, I strengthened visual hierarchy with bolder, larger titles and added white space for better visual balance." 
                                            image={solution3} 
                                            alt="Solution 3" 
                                        />
                                        <SolutionCard 
                                            number="4" 
                                            title="Product Detail Page" 
                                            after="Applying the Gestalt figure-ground principle, I added backgrounds to navigation icons to ensure visibility against any image. Following Nielsen's visibility of system status, I improved size selection with filled indicators and color-coded stock availability for immediate recognition. Finally, applying Fitts's Law, I fixed the ADD button for persistent access, reducing friction in the purchase flow." 
                                            image={solution4} 
                                            alt="Solution 4" 
                                        />
                                    </div>
                                </div>
                            </WorkSectionLayout>

                            {/* 06 Final Design */}
                            <WorkSectionLayout number="06" title="Final Design">
                                <div className="space-y-8">
                                    <h2 className="md:text-3xl">Interactive prototype</h2>
                                    <FigmaEmbed
                                        src="https://embed.figma.com/proto/QV5iVjqPfbXkafgrNaJDJ7/H-M-Redesign--New-?node-id=3001-1597&viewport=269%2C204%2C0.71&scaling=scale-down&content-scaling=fixed&page-id=400%3A440&starting-point-node-id=3001%3A1597&embed-host=share"
                                        paddingBottom="90%"
                                        title="H&M App Redesign Interactive Prototype"
                                    />
                                </div>
                            </WorkSectionLayout>

                            {/* 07 Reflection */}
                            <WorkSectionLayout number="07" title="Reflection">
                                <div className="space-y-8">
                                    <h2 className="md:text-3xl">What I learned</h2>
                                    <p>This project started with my own frustration using the H&M app, but through systematic analysis, I learned to look beyond personal preferences and identify genuine usability issues. The heuristic evaluation and user scenario helped me understand that seemingly small problems can significantly impact the shopping experience.</p>
                                    <p>I discovered that impactful UX improvements don't always require dramatic redesigns. Many of my solutions involved subtle refinements: making navigation always visible, enlarging color swatches, and strengthening visual feedback. These changes respect H&M's existing design language while meaningfully improving usability. The challenge of working within brand constraints actually made me a more thoughtful designer, forcing me to justify each decision and find elegant solutions to complex problems.</p>
                                </div>
                                <div className="space-y-8">
                                    <h2 className="md:text-3xl">Next steps</h2>
                                    <ul className="list-disc list-outside ml-8 space-y-1">
                                        <li>Conduct usability testing to validate improvements with real users</li>
                                        <li>Measure impact on task completion time and error rates</li>
                                        <li>Extend the redesign to other flows like search and checkout</li>
                                    </ul>
                                </div>
                            </WorkSectionLayout>
                        </StickyNavLayout>
                    </div>
                </div>
            </section>
        </FadeUp>
    );
}

export default HM;