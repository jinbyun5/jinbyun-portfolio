import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ArrowLeftIcon, ArrowsInIcon, BookmarksIcon, GpsSlashIcon, CheckIcon, WarningIcon } from '@phosphor-icons/react';

import ProjectHeader from '../../components/ProjectHeader';
import WorkSectionLayout from '../../components/WorkSectionLayout';
import HighlightCard from '../../components/HighlightCard';
import StatCard from '../../components/StatCard';
import ProjectCard from '../../components/ProjectCard';

import { projects } from '../../data/projects';

import heroImage from '../../assets/the-papery/hero-image.webp';
import persona from '../../assets/the-papery/user-persona.webp';
import empathyMap from '../../assets/the-papery/empathy-map.webp';
import journeyMap from '../../assets/the-papery/journey-map.webp';
import bookmarkFlow from '../../assets/the-papery/userflow-bookmark.webp';
import checkoutFlow from '../../assets/the-papery/userflow-checkout.webp';
import initialfiWireframes from '../../assets/the-papery/initial-wireframes.webp';

function ThePapery() {

    const [activeUserflow, setActiveUserflow] = useState('bookmark');
    
    const project = projects.find(p => p.slug === 'the-papery');
    const otherProjects = projects.filter(p => p.slug !== 'the-papery');

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
                            alt="The Papery Website Design Overview" 
                            className="w-full h-full object-cover object-center" 
                        />
                    </div>
                </figure>

                <article className="col-span-4 md:col-span-12 mt-10 space-y-20 bg-[#fbfbfb] rounded-2xl px-6 md:px-10 py-12 -mx-5 md:mx-0">

                    {/* 01 Project Overview */}
                    <WorkSectionLayout number="01" title="Project Overview">
                        <h4 className="b4 md:b2">Turning usability insights into a seamless shopping experience</h4>
                        <div className="space-y-4 md:text-lg">
                            <p>The Papery is a concept e-commerce website for a stationery brand designed to demonstrate the full UX design process, from initial research to iterative improvement through usability testing.</p>
                            <p>The primary goal is to design a complete end-to-end shopping flow, from product discovery to checkout, and learn how to make informed design decisions based on real user feedback.</p>
                        </div>
                    </WorkSectionLayout>

                    {/* 02 The Challenge */}
                    <WorkSectionLayout number="02" title="The Challenge">
                        <h4 className="b4 md:b2">Overloaded pages turned simple shopping into a struggle</h4>
                        <div className="space-y-4 md:text-lg">
                            <p>Based on my research on existing stationery platforms such as Muji and Indigo, I identified several pain points that disrupt the shopping experience despite their success. Pages were overloaded with information, making it hard to know where to focus. Visual hierarchy was unclear, and unnecessary extra steps interrupted the natural user flow.</p>
                        </div>
                        {/* The Goal */}
                        <h5 className="b5 md:text-2xl">How might we design a seamless shopping flow that minimizes friction and supports confident purchasing decisions?</h5>
                        <p className="md:text-xl">
                            To address these issues, I defined three key goals:
                        </p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <HighlightCard 
                                title="1) Clarity" 
                                content="Simplify information by prioritizing content to reduce visual noise">
                            </HighlightCard><HighlightCard 
                                title="2) Hierarchy" 
                                content="Guide users to key actions through clear visual hierarchy">
                            </HighlightCard>
                            <HighlightCard 
                                title="3) Flow" 
                                content="Streamline the shopping path with minimal interruptions">
                            </HighlightCard>
                        </div>
                    </WorkSectionLayout>

                    {/* 03 User Research */}
                    <WorkSectionLayout number="03" title="User Research">
                        <div className="space-y-4 md:text-lg">
                            <h4 className="b4 md:b2">Understanding the user</h4>
                            <p>To ground my design decisions in real user needs, I conducted user research through a persona, scenario, empathy map, and journey map.</p>
                            <p className="b6 italic">"Olivia Bennett is a 22-year-old university student in Vancouver who wants to refresh her stationery collection after finishing her final exams. While browsing Pinterest, she discovers The Papery through a moodboard and is drawn in by the clean layout and calming product photos. She explores curated categories, bookmarks a few items, and checks reviews and lifestyle photos. Reassured by the brand story and aesthetic values, she adds three items to her cart and checks out easily using Apple Pay."</p>
                            <div className="flex gap-2">                        
                                <img src={persona} className="w-1/2 rounded-xl" alt="User Persona" />
                                <img src={empathyMap} className="w-1/2 rounded-xl" alt="Empathy Map" />
                            </div>
                            <img src={journeyMap} className="w-full rounded-xl" alt="User Journey Map" />
                        </div>

                        {/* Key Insights */}
                        <div className="py-8 space-y-6">
                            <h4 className="b4 md:b2">Key insights</h4>
                            <p className="md:text-lg">
                                Based on my analysis of user behavior and the pain points identified in competitor sites, I found three critical areas for improvement:
                            </p>
                            <HighlightCard
                                icon={<ArrowsInIcon size={24} />}
                                title="Information Overload" 
                                content="Users feel frustrated when a website tries to show everything at once. They need a clean layout that helps them focus without visual distractions.">
                            </HighlightCard>
                            <div className="flex gap-6">
                                <HighlightCard
                                    icon={<BookmarksIcon size={24} />}
                                    title="Bookmark Friction" 
                                    content="Many users like to bookmark items to decide later. However, if the process requires extra steps or forced logins, they often abandon the site before reaching the cart.">
                                </HighlightCard>
                                <HighlightCard
                                    icon={<GpsSlashIcon size={24} />}
                                    title="Navigation Fatigue" 
                                    content="When categories are poorly organized or buttons aren’t clearly visible, users spend more energy searching for the path rather than choosing products.">
                                </HighlightCard>
                            </div>
                        </div>
                    </WorkSectionLayout>

                    {/* 04 Design Process */}
                    <WorkSectionLayout number="04" title="Design Process">
                        <h4 className="b4 md:b2">Mapping the flow</h4>
                        <div className="space-y-4 md:text-lg">
                            <p>Based on the research findings and user flow, I created low-fidelity wireframes to establish the layout and structure of each key screen.</p>
                        </div>
                        <div className="flex gap-3 mb-4 items-center justify-center">
                            <button 
                                onClick={() => setActiveUserflow('bookmark')}
                                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium 
                                    ${activeUserflow === 'bookmark' ? 'bg-jb-blue text-jb-white' : 'border border-jb-blue text-jb-blue'}`}
                            >
                                Bookmark Flow
                            </button>
                            <button 
                                onClick={() => setActiveUserflow('checkout')}
                                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium
                                    ${activeUserflow === 'checkout' ? 'bg-jb-blue text-jb-white' : 'border border-jb-blue text-jb-blue'}`}
                            >
                                Checkout Flow
                            </button>
                        </div>
                        {activeUserflow === 'bookmark' 
                            ? <img src={bookmarkFlow} className="w-full rounded-xl" alt="Bookmark Flow" />
                            : <img src={checkoutFlow} className="w-full rounded-xl" alt="Checkout Flow" />
                        }
                        
                        <div className="space-y-8 md:text-lg py-10">
                            <h4 className="b4 md:b2">Initial drafts</h4>
                            <p>I started with early wireframes and prototypes, leaving room for iteration based on user testing findings.</p>
                            <img src={initialfiWireframes} className="w-full rounded-xl" alt="Low Fidelity Wireframes" />
                        </div>
                    </WorkSectionLayout>

                    {/* 05 Usability Testing */}
                    <WorkSectionLayout number="05" title="Usability Testing">
                        <div className="space-y-4 md:text-lg">
                            <h4 className="b4 md:b2">Validating my ideas</h4>
                            <p>To evaluate the design, I conducted an unmoderated usability testing using Maze with 13 participants. The test consisted of six screen-based tasks followed by an open-ended question to gather qualitative feedback.</p>
                            <div className="space-y-10 pt-6">
                                <div className="space-y-4">
                                    <h5 className="b5 md:text-2xl">Test goals</h5>
                                    <ul className="list-disc list-outside ml-8 space-y-1">
                                        <li>Can users quickly find a specific product while browsing?</li>
                                        <li>Can users easily save items and access them later?</li>
                                        <li>Can users complete the checkout process without confusion?</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h5 className="b5 md:text-2xl">Results overview</h5>
                                    <p>While all tasks were completed successfully, the high misclick rates on several tasks revealed underlying usability issues that needed to be addressed.</p>
                                    <div className="flex flex-col md:flex-row gap-3">
                                        <StatCard icon={<CheckIcon size={22} />} number="100%" description="Success rate across all tasks" />
                                        <StatCard icon={<WarningIcon size={22} />} number="64.8%" description="Misclick rate on Find a product" color="accent" />
                                        <StatCard icon={<WarningIcon size={22} />} number="75.6%" description="Misclick rate on Add to cart" color="accent" />
                                        <StatCard icon={<CheckIcon size={22} />} number="32.2s" description="Avg. duration on Find a product" color="accent" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </WorkSectionLayout>

                    {/* 06 Iterations */}
                    <WorkSectionLayout number="06" title="Findings & Iterations">
                        <h4 className="b4 md:b2">Key findings</h4>
                        <div className="space-y-4 md:text-lg">
                            <p></p>
                        </div>
                    </WorkSectionLayout>




                </article>

            </div>
        </section>
    );
}

export default ThePapery;